from flask import Flask, jsonify
from wake_utils import send_wake_command
import logging
from flask_cors import CORS  # <--- aggiunto

app = Flask(__name__)
CORS(app, origins=["http://188.245.185.96:7000","http://appiccopc.duckdns.org:7000"])

# Setup logging
logging.basicConfig(level=logging.INFO)

@app.route("/wake/fisso", methods=["GET"])
def wake_pc1():
    app.logger.info("Endpoint /wake/fisso chiamato")
    result = send_wake_command("accendi_pc-pisso")
    return jsonify({"status": result})

@app.route("/wake/mini_pc", methods=["GET"])
def wake_pc2():
    app.logger.info("Endpoint /wake/mini_pc chiamato")
    result = send_wake_command("accendi_pc")
    return jsonify({"status": result})

if __name__ == "__main__":
    app.logger.info("Avvio del backend Flask")
    app.run(host="0.0.0.0", port=7001)
