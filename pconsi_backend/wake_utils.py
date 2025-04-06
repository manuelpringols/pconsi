import subprocess
import logging
from config import RASPBERRY_IP, SSH_USER

# Imposta livello di logging
logging.basicConfig(level=logging.INFO)

def send_wake_command(target_pc):
    script = f"/home/{SSH_USER}/accendi_pc/{target_pc}.sh"
    command = f"ssh {SSH_USER}@{RASPBERRY_IP} 'bash {script}'"
    
    logging.info(f"Invio comando SSH: {command}")
    
    try:
        subprocess.run(["ssh", f"{SSH_USER}@{RASPBERRY_IP}", f"bash {script}"], check=True)
        logging.info(f"{target_pc} acceso con successo.")
        return f"{target_pc} acceso con successo"
    except subprocess.CalledProcessError as e:
        logging.error(f"Errore durante l'accensione di {target_pc}: {e}")
        return f"Errore durante l'accensione di {target_pc}"
