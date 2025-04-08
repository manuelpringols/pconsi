import http.server
import socketserver
import os

class MyHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/":
            self.path = "/home.html"  # Serve home.html al posto della root
        return super().do_GET()

# Imposta la porta su cui far girare il server
PORT = 7000

os.chdir('.')  # Imposta la directory corrente

with socketserver.TCPServer(("", PORT), MyHandler) as httpd:
    print(f"Servendo {os.getcwd()}/home.html su http://localhost:{PORT}")
    httpd.serve_forever()
