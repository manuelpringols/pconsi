# Dockerfile per il frontend
FROM python:3.9-slim

# Impostazioni ambiente
WORKDIR /app

# Copia i file necessari
COPY . /app


# Espone la porta 7000 per il frontend
EXPOSE 7000

# Comando per avviare il server Python per il frontend
CMD ["python", "server_home.py"]
