from flask import Flask
from flask_limiter import Limiter

app = Flask(__name__)
limiter = Limiter(app, key_func=get_remote_address)

@app.route("/api")
@limiter.limit("5 per minute")
def api():
    return "This is a rate-limited endpoint"

if __name__ == "__main__":
    app.run()
