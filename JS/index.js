console.log('Bonjour');

const readlineSync = require('readline-sync')
let nom = readlineSync.question(" Nom :  ");

let nb = readlineSync.questionInt("Age :  ");
console.log(nom, nb);