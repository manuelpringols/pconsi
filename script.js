// Funzione per inviare una richiesta di accensione per il PC fisso
function wakeUpPCFisso(pcNumber) {
  alert("Richiesta di accensione per PC " + "Fisso");

  // Invia una richiesta al server per accendere il PC fisso
  fetch(`http://188.245.185.96:7001/wake/fisso`, {
      method: 'GET', // Puoi usare 'GET' se il server accetta una richiesta GET, o 'POST' se richiede un POST
      headers: {
          'Content-Type': 'application/json', // Assicurati che il server accetti il tipo di contenuto giusto
      },
      body: JSON.stringify() // Invia il numero del PC come dato
  })
  .then(response => response.json())
  .then(data => {
      console.log(data); // Gestisci la risposta
      alert("Script eseguito sul server: " + data.status); // Mostra il messaggio di risposta, se presente
  })
  .catch(error => {
      console.error('Errore:', error); // Gestisci eventuali errori
      alert("Si è verificato un errore nel tentativo di accendere il PC.");
  });
}

// Funzione per inviare una richiesta di accensione per il mini PC
function wakeUpMini_PC(pcNumber) {
  alert("Richiesta di accensione per PC " + "Mini-Pc");

  // Invia una richiesta al server per accendere il mini PC
  fetch(`http://188.245.185.96:7001/wake/mini_pc`, {
      method: 'GET', // Puoi usare 'GET' se il server accetta una richiesta GET, o 'POST' se richiede un POST
      headers: {
          'Content-Type': 'application/json', // Assicurati che il server accetti il tipo di contenuto giusto
      },
      body: JSON.stringify() // Invia il numero del PC come dato
  })
  .then(response => response.json())
  .then(data => {
      console.log(data); // Gestisci la risposta
      alert("Script eseguito sul server: " + data.status); // Mostra il messaggio di risposta, se presente
  })
  .catch(error => {
      console.error('Errore:', error); // Gestisci eventuali errori
      alert("Si è verificato un errore nel tentativo di accendere il PC.");
  });
}
