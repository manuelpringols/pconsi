#!/bin/bash

# Attivare l'ambiente virtuale
source venv/bin/activate

# Eseguire lo script python in background con nohup
nohup python3 app.py > flask.log 2>&1 &

