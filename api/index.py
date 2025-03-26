from flask import Flask, jsonify

app = Flask(__name__)


@app.route("/messages/hello")
def home():
    return jsonify({"message": "Hello from Flask!"})


@app.route("/messages/about")
def about():
    return "About"


if __name__ == "__main__":
    app.run()
