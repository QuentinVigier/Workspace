// Algorithme qui demande à l'utilisateur 3 nombres et le programme affiche les 3 
// nombres dans l'ordre croissant

const readlineSync = require('readline-sync')
let a = readlineSync.question(" Nombre :  ");
let b = readlineSync.question(" Nombre :  ");
let c = readlineSync.question(" Nombre :  ");

if(a<b && a<c){
    if(b<c){
        console.log(a,b,c);
    }else{
        console.log(a,c,b);
    }
}else if(b<a && b<c){
    if(a<c){
        console.log(b,a,c);
    }else{
        console.log(b,c,a);
    }
}else{
    if(a<b){
        console.log(c,a,b);
    }else{
        console.log(c,b,a);
    }
}