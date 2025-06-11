import pandas as pd
import numpy as np
import tensorflow as tf
from keras.callbacks import EarlyStopping
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.model_selection import train_test_split
import joblib
import os

# Caminhos
csv_path = "destinos_com_perfis.csv"
modelo_path = "modelo_perfis.keras"
encoder_path = "encoder_perfis.npy"
scaler_path = "scaler_perfis.pkl"
colunas_path = "colunas_treinadas.pkl"

# 1. Carregar dados
print("📦 Carregando dados com perfis...")
df = pd.read_csv(csv_path)

X = df.drop(columns=["perfil"])
y = df["perfil"]

# 2. Salvar colunas
colunas_originais = X.columns
joblib.dump(colunas_originais, colunas_path)

# 3. Codificar os perfis
le = LabelEncoder()
y_encoded = le.fit_transform(y)
np.save(encoder_path, le.classes_)

# 4. Normalizar
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
joblib.dump(scaler, scaler_path)

# 5. Separar treino/teste com estratificação
X_train, X_test, y_train, y_test = train_test_split(
    X_scaled, y_encoded, test_size=0.2, stratify=y_encoded, random_state=42
)

# 6. Modelo
model = tf.keras.Sequential([
    tf.keras.layers.Input(shape=(X_train.shape[1],)),
    tf.keras.layers.Dense(128, activation="relu"),
    tf.keras.layers.Dense(64, activation="relu"),
    tf.keras.layers.Dense(len(le.classes_), activation="softmax")
])

model.compile(optimizer="adam", loss="sparse_categorical_crossentropy", metrics=["accuracy"])

early_stop = EarlyStopping(patience=10, restore_best_weights=True)

# 7. Treinar modelo
print("🧠 Treinando modelo de perfis...")
history = model.fit(
    X_train, y_train,
    epochs=100,
    validation_split=0.2,
    callbacks=[early_stop],
    verbose=1
)
print(y.value_counts(normalize=True))

# 8. Avaliação
loss, acc = model.evaluate(X_test, y_test)
print(f"✅ Acurácia no teste: {acc * 100:.2f}%")

# 9. Salvar modelo
model.save(modelo_path)
print("💾 Modelo salvo com sucesso.")
