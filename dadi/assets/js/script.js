// Gioco dei dadi

// creazione variabili
var dice1, dice2, result;

// assegnazione valori random per tiro del dado
dice1 = Math.floor(Math.random() * 6) + 1;
dice2 = Math.floor(Math.random() * 6) + 1;

// confronto tra i due dadi
if (dice1 > dice2) {
  result = 'Vince il dado 1';
} else if (dice2 > dice1) {
  result = 'Vince il dado 2';
} else {
  result = 'Pareggio!';
}

// output
console.log('DADO 1 = ', dice1);
console.log('DADO 2 = ', dice2);
console.log(result);