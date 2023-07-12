// Exercice 4 :
// Ecrire un algorithme qui demande un nombre à l’utilisateur, et affiche ensuite :
// « + » si ce nombre est positif
// « - » Si ce nombre est négatif
// « Neutre » Si ce nombre est le 0

const readlineSync = require('readline-sync')
let n = readlineSync.question(" Nombre :  ");
if(n<0){
    console.log("-");
}
else if(n>0){
    console.log('+');
}
else{
    console.log(0);
}
