// Exercice 5

// Ecrire un algorithme qui demande à l’utilisateur de saisir un nombre et de lui afficher son
// carré

const readlineSync = require('readline-sync')
let n = readlineSync.question(" Nombre :  ");
let c = n*n;
console.log('Le carré de ', n, 'est ', c);
