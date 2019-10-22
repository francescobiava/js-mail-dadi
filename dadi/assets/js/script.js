// Gioco dei dadi

// creazione variabili
var dice1, dice2, dice3, dice4, player1, player2, result;

// assegnazione valori random per tiri dei dadi
dice1 = Math.floor(Math.random() * 6) + 1;
dice2 = Math.floor(Math.random() * 6) + 1;
dice3 = Math.floor(Math.random() * 6) + 1;
dice4 = Math.floor(Math.random() * 6) + 1;

// calcolo somma dei due dadi
player1 = dice1 + dice2;
player2 = dice3 + dice4;

// confronto tra i due dadi
if (player1 > player2) {
  result = 'Vince il giocatore 1';
} else if (player2 > player1) {
  result = 'Vince il giocatore 2';
} else {
  result = 'Pareggio!';
}

// output
console.log('GIOCATORE 1: ', dice1, '+', dice2, '=', player1);
console.log('GIOCATORE 2: ', dice3, '+', dice4, '=', player2);
console.log(result);