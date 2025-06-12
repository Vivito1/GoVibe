from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
import tensorflow as tf
import joblib
import os

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # ← para testes

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
    return jsonify({"mensagem": "Recebido com sucesso!"})


if __name__ == '__main__':
    app.run(debug=True)
