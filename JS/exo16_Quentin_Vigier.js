// Ecrire un Algorithme qui permet d’écrire une table de multiplication jusqu’à 14.

const readlineSync = require('readline-sync')
let a = readlineSync.question(" Nombre :  ");

for(let i = 0; i<15; i++){
    console.log(a, ' x ', i, " = ", a*i)
}