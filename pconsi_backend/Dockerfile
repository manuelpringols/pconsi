# Dockerfile per il backend Flask
FROM python:3.9-slim

# Impostazioni ambiente
WORKDIR /app

# Copia i file necessari
COPY ./pconsi_backend /app

# Installa le dipendenze
RUN pip install --no-cache-dir -r requirements.txt

# Espone la porta 7001 per il backend
EXPOSE 7001

# Comando per avviare il server Flask
CMD ["python", "app.py"]
