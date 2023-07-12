// Demander à un enfant de rentrer son âge ; si celui-ci est compris entre 6 et 7, 
// afficher « poussin » ; s’il est compris entre 8 et 9, afficher « pupille » ; s’il est compris 
// entre 10 et 11, afficher « minime » ; enfin, s’il est de 12 ou plus, afficher « cadet ».

const readlineSync = require('readline-sync')
let a = readlineSync.question(" Âge :  ");

if(a<=5){
    console.log("Votre enfant n'est pas assez vieux pour s'inscrire");
}
else if(a>=6 && a<=7){
    console.log("Votre enfant est poussin");
}
else if(a>=8 && a<=9){
    console.log("Votre enfant est pupille");
}
else if(a>=10 && a<=11){
    console.log("Votre enfant est minime");
}
else if(a>=12){
    console.log("Votre enfant est cadet");
}