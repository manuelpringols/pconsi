// =====================
// FUNZIONE ACCENSIONE PC
// =====================

// Funzione per inviare una richiesta di accensione per il PC fisso
function wakeUpPCFisso() {
    alert("Richiesta di accensione per PC Fisso");
  
    // Invia una richiesta al server per accendere il PC fisso
    fetch(`http://188.245.185.96:7001/wake/fisso`, {
        method: 'GET', // Usa 'GET' se il server accetta una richiesta GET
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); // Gestisci la risposta
        alert("Script eseguito sul server: " + data.status); // Mostra il messaggio di risposta
    })
    .catch(error => {
        console.error('Errore:', error); // Gestisci eventuali errori
        alert("Si è verificato un errore nel tentativo di accendere il PC.");
    });
  }
  
  // Funzione per inviare una richiesta di accensione per il mini PC
  function wakeUpMiniPC() {
    alert("Richiesta di accensione per PC Mini-Pc");
  
    // Invia una richiesta al server per accendere il mini PC
    fetch(`http://188.245.185.96:7001/wake/mini_pc`, {
        method: 'GET', // Usa 'GET' se il server accetta una richiesta GET
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); // Gestisci la risposta
        alert("Script eseguito sul server: " + data.status); // Mostra il messaggio di risposta
    })
    .catch(error => {
        console.error('Errore:', error); // Gestisci eventuali errori
        alert("Si è verificato un errore nel tentativo di accendere il PC.");
    });
  }
  
  // =====================
  // SPEGNIMENTO PC
  // =====================
  
  function shutdownPCFisso() {
      alert("Invio comando di spegnimento al PC Fissos");
      fetch("http://188.245.185.96:7001/shutdown/fisso")
        .then(response => response.json())
        .then(data => alert("PC Fisso: " + data.status))
        .catch(error => {
          console.error('Errore:', error);
          alert("Errore nel tentativo di spegnere il PC.");
        });
  }
    
  function shutdownMiniPC() {
      alert("Invio comando di spegnimento al Mini PC");
      fetch("http://188.245.185.96:7001/shutdown/mini_pc")
        .then(response => response.json())
        .then(data => alert("Mini PC: " + data.status))
        .catch(error => {
          console.error('Errore:', error);
          alert("Errore nel tentativo di spegnere il PC.");
        });
  }
  
  // =====================
  // VERIFICA STATO PC
  // =====================
  
  async function getPCStatus() {
      try {
          const res = await fetch("http://188.245.185.96:7001/status");
          const status = await res.json();
  
          updateUI("fisso", status.fisso);
          updateUI("mini", status.mini_pc);
      } catch (error) {
          console.error("Errore nel recuperare lo stato dei PC", error);
      }
  }
  
  function updateUI(pcName, isOn) {
    const accendiBtn = document.getElementById(`accendi-${pcName}`);
    const spegniBtn = document.getElementById(`spegni-${pcName}`);

    accendiBtn.style.cursor = "pointer";
    spegniBtn.style.cursor = "pointer";
    spegniBtn.style.marginTop = "8px";
    spegniBtn.style.transition = "all 0.3s ease";

    // Rimuovi eventuali classi animate precedenti
    accendiBtn.classList.remove("pulse-green", "pulse-red");

    if (isOn) {
        accendiBtn.style.backgroundColor = "#4CAF50";
        accendiBtn.textContent = "🟢 Acceso - " + (pcName === "fisso" ? "PC Fisso" : "Mini PC");
        accendiBtn.classList.add("pulse-green");

        spegniBtn.style.display = "inline-block";
        spegniBtn.style.opacity = "1";
    } else {
        accendiBtn.style.backgroundColor = "#888";
        accendiBtn.textContent = "🔴 Spento - " + (pcName === "fisso" ? "PC Fisso" : "Mini PC");
        accendiBtn.classList.add("pulse-red");

        spegniBtn.style.display = "none";
        spegniBtn.style.opacity = "0";
    }
}

  
  // Chiamata allo startup
  window.onload = () => {
      getPCStatus();
  
      // Se vuoi che si aggiorni ogni 10 secondi:
      setInterval(getPCStatus, 10000);
  };
  