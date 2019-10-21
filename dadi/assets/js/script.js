// Gioco dei dadi

// creazione variabili
var dice1, dice2;

// assegnazione valori random per tiro del dado
dice1 = Math.floor(Math.random() * 6) + 1;
dice2 = Math.floor(Math.random() * 6) + 1;

// console log valore dadi
console.log('DADO 1 = ', dice1);
console.log('DADO 2 = ', dice2);

// confronto tra i due dadi
if (dice1 > dice2) {
  console.log('Vince il dado 1!');
} else if (dice2 > dice1) {
  console.log('Vince il dado 2!');
} else {
  console.log('Pareggio!');
}