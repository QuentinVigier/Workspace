// Ecrire un algorithme qui demande à l’utilisateur s’il veut un café ou non. Tant qu’il
// répond oui afficher servir un café sinon afficher aurevoir.
// Boucle et condition 

const readlineSync = require('readline-sync')
let a = readlineSync.question(" Âge :  ");

for(let i = 0; i < a; i++){
    console.log('Bonjour');
}