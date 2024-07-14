from textblob import TextBlob
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB

# Example data
posts = [
    {"content": "This is a parody of a famous tweet", "label": "parody"},
    {"content": "This is an impersonation attempt", "label": "impersonation"},
    {"content": "This post is emotionally loaded", "label": "emotional"}
]

# Train a simple classifier
vectorizer = CountVectorizer()
X = vectorizer.fit_transform([post['content'] for post in posts])
y = [post['label'] for post in posts]

model = MultinomialNB()
model.fit(X, y)

# Function to classify new posts
def classify_post(content):
    X_new = vectorizer.transform([content])
    prediction = model.predict(X_new)
    return prediction[0]

# Example usage
new_post = "This is a suspicious post"
print(classify_post(new_post))
