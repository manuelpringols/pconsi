from flask import Flask, jsonify
from wake_utils import send_wake_command
from wake_utils import send_shutdown_command

import logging
from flask_cors import CORS  # <--- aggiunto
import subprocess
import requests

app = Flask(__name__)
CORS(app, origins=["http://188.245.185.96:7000", "http://appiccopc.duckdns.org:7000"])

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


@app.route("/shutdown/fisso", methods=["GET"])
def shutdown_pc1():
    app.logger.info("Endpoint /shutdown/fisso chiamato")
    result = send_shutdown_command("spegni_pc_fisso")
    return jsonify({"status": result})

@app.route("/shutdown/mini_pc", methods=["GET"])
def shutdown_pc2():
    app.logger.info("Endpoint /shutdown/mini_pc chiamato")
    result = send_shutdown_command("spegni_pc")
    return jsonify({"status": result})
def is_pc_reachable(ip):
    try:
        output = subprocess.check_output(["ping", "-c", "1", "-W", "1", ip], stderr=subprocess.DEVNULL)
        return True
    except subprocess.CalledProcessError:
        return False

@app.route("/status", methods=["GET"])
def check_status():
    try:
        # Chiama l'endpoint della Raspberry per ottenere lo stato dei PC
        response = requests.get("http://10.0.0.94:5000/status", timeout=2)
        data = response.json()
 
        # Restituisce lo stato dei PC al frontend
        return jsonify({
            "fisso": data["fisso"],  # Stato del PC fisso
            "mini_pc": data["mini_pc"]  # Stato del Mini PC
        })
    except Exception as e:
        return jsonify({"error": "Impossibile contattare la Raspberry", "details": str(e)}), 500

if __name__ == "__main__":
    app.logger.info("Avvio del backend Flask")
    app.run(host="0.0.0.0", port=7001)
