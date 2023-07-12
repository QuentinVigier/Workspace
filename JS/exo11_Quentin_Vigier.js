// Exercice 11
// Ecrire un algorithme qui lit 2 entiers et qui affiche le plus grand des deux.

const readlineSync = require('readline-sync')
let n1 = readlineSync.question(" Nombre :  ");
let n2 = readlineSync.question(" Nombre :  ");

if (n1>n2) {
    console.log(n1);
}else{
    console.log(n2);
}