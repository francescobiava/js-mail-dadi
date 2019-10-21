// Chiedi all'utente la sua email, controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato

// creazione variabili
var userEmail, list, check;

// creazione lista
list = ['andrea@wow.it', 'angelo@wow.it', 'fabrizio@wow.it', 'filippo@wow.it', 'flavio@wow.it', 'francesco@wow.it', 'giampaolo@wow.it', 'giuseppe@wow.it', 'jolanda@wow.it', 'leonardo@wow.it', 'lilian@wow.it', 'manuel@wow.it', 'marco@wow.it', 'mattia@wow.it', 'michele@wow.it', 'simone@wow.it', 'sofia@wow.it', 'thomas@wow.it', 'valentina@wow.it', 'victor@wow.it', 'axl@wow.it', 'chiara@wow.it'];

// valore base falso di check
check = false;

// inserimento email utente
userEmail = prompt('Inserisci il tuo indirizzo email');

// confronto con la lista
for (var i = 0; i < list.length; i++) {
  if (userEmail === list[i]) {
    check = true;}
}

// messaggio a utente
if (check === true) {
  alert("Sei invitato al talk con Marco dell'Anna del 22 ottobre");
} else {
  alert('Nessuno ti vuole');
}