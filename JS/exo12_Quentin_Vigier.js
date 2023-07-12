// Algorithme qui demande à l'utilisateur 3 nombres et le programme affiche le plus grand.

const readlineSync = require('readline-sync')
let n1 = readlineSync.question(" Nombre :  ");
let n2 = readlineSync.question(" Nombre :  ");
let n3 = readlineSync.question(" Nombre :  ");

let max = 0;

//Vérifier qui est le plus grand des deux entre n1 et n2
if(n1>n2){
    max = n1;
}else{
    max = n2;
}

//vérifier si n3 est plus grand que max
if(n3>max){
    max = n3;
}else{
    max = max;
}
console.log('Le plus grand des 3 nombres est : ', max);