from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
import tensorflow as tf
import joblib
import os

app = Flask(__name__)
CORS(app)

# Caminhos dos arquivos
modelo_path = "modelo_perfis.keras"
encoder_path = "encoder_perfis.npy"
scaler_path = "scaler_perfis.pkl"
colunas_path = "colunas_treinadas.pkl"
csv_paises = "base_paises_perfis.csv"

# Carregar tudo na memória
model = tf.keras.models.load_model(modelo_path)
classes = np.load(encoder_path, allow_pickle=True)
scaler = joblib.load(scaler_path)
colunas_treinadas = joblib.load(colunas_path)
df_paises = pd.read_csv(csv_paises)

# Mapeamento
mapa_perfis = {
    "Sol e Praia": "Sol e Praia",
    "Cultura e História": "Cultura e História",
    "Aventura e Natureza": "Aventura e Natureza",
    "Frio e Montanha": "Frio e Montanha"
}

@app.route('/')
def index():
    return 'API GoVibe está online. Use /prever com método POST.'

@app.route('/prever', methods=['POST'])
def prever():
    dados = request.json

    if not dados or 'binarios' not in dados or 'preferencias' not in dados:
        return jsonify({'erro': 'Dados incompletos'}), 400

    binarios = dados['binarios']
    preferencias = dados['preferencias']

    df_usuario = pd.DataFrame([binarios])
    df_usuario = df_usuario.reindex(columns=colunas_treinadas, fill_value=0)
    X_usuario = scaler.transform(df_usuario)

    pred = model.predict(X_usuario)
    indice_predito = np.argmax(pred)
    perfil_previsto = classes[indice_predito]
    perfil_csv = mapa_perfis.get(perfil_previsto)

    print(f"\n🧠 Perfil previsto: {perfil_previsto}")
    print(f"🔁 Mapeado como: {perfil_csv}")

    if not perfil_csv:
        return jsonify({'erro': f"Perfil '{perfil_previsto}' não tem correspondência."}), 500

    prefs = {
        "idioma": preferencias["idioma"].lower().strip(),
        "continente": preferencias["continente"].lower().strip(),
        "cultura": preferencias["cultura"].lower().strip(),
        "orcamento": preferencias["orcamento"].replace("_", "-").lower().strip()
    }

    print("🔍 Preferências recebidas:")
    print(prefs)

    candidatos = df_paises[df_paises["perfil"].str.lower() == perfil_csv.lower()].copy()

    if candidatos.empty:
        return jsonify({
            'perfil': perfil_previsto,
            'destinos': [],
            'mensagem': "Nenhum país com esse perfil."
        })

    # NOVA FUNÇÃO DE PONTUAÇÃO COM PESOS
    def pontuar(linha):
        score = 0
        if prefs["continente"] in linha["continente"].lower():
            score += 4
        if prefs["orcamento"] in linha["orcamento"].lower():
            score += 3
        if prefs["idioma"] in linha["idioma"].lower():
            score += 2
        if prefs["cultura"] in linha["cultura"].lower():
            score += 1
        return score

    candidatos["score"] = candidatos.apply(pontuar, axis=1)
    candidatos = candidatos.sort_values(by="score", ascending=False)

    if candidatos["score"].max() == 0:
        return jsonify({
            'perfil': perfil_previsto,
            'destinos': [],
            'mensagem': "Nenhum país compatível com as preferências."
        })

    # Top 3 destinos com melhor score
    top3 = candidatos.head(3)
    nomes_top3 = top3["nome"].tolist()

    print("🎯 Top 3 destinos encontrados:")
    for i, row in top3.iterrows():
        print(f" - {row['nome']} | Score: {row['score']}")

    return jsonify({
        'perfil': perfil_previsto,
        'destinos': nomes_top3,
        'mensagem': f"Baseado no perfil '{perfil_previsto}', recomendamos estes destinos."
    })

if __name__ == '__main__':
    app.run(debug=True)
