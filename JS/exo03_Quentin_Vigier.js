// Exercice 3 :
// Ecrire un algorithme permettant d’échanger les valeurs de deux variables A et B.
// Les deux variables sont lues à partir du clavier

const readlineSync = require('readline-sync')
let a = readlineSync.question(" A :  ");
let b = readlineSync.question(" B :  ");
let c;
c = a;
a = b;
b = c;
console.log("La valeur de A est : ", a);
console.log("La valeur de B est : ", b);


