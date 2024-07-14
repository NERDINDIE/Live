import tensorflow as tf
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Embedding, LSTM, Dense

# Example data
texts = ["This is a parody", "This is an impersonation", "Emotionally loaded content"]
labels = [0, 1, 2]  # 0: parody, 1: impersonation, 2: emotional

tokenizer = Tokenizer(num_words=5000)
tokenizer.fit_on_texts(texts)
X = tokenizer.texts_to_sequences(texts)
X = pad_sequences(X, maxlen=100)

model = Sequential([
    Embedding(5000, 64, input_length=100),
    LSTM(64),
    Dense(3, activation='softmax')
])

model.compile(loss='sparse_categorical_crossentropy', optimizer='adam', metrics=['accuracy'])
model.fit(X, labels, epochs=10)

# Function to classify new posts
def classify_post(content):
    X_new = tokenizer.texts_to_sequences([content])
    X_new = pad_sequences(X_new, maxlen=100)
    prediction = model.predict(X_new)
    return prediction.argmax(axis=1)[0]

# Example usage
new_post = "This is a suspicious post"
print(classify_post(new_post))
