console.log("hello");
let age;
age = 16 //number 
console.log(typeof age);

const prenom = "elevan" //string
console.log(typeof prenom);

let addition = 4+12;
console.log(addition + " addition");

let soustraction = 2-50;
console.log(soustraction + " soustraction");

let multiplication = 3*8 ;
console.log(multiplication + " multiplication");

let division = 7/2 ;
console.log(division + " division");

let modulo = 5%2 ;
console.log(modulo = " modulo");

let test = 3>5
console.log(test + " test"); //booleen

// > >= < <= === == != !==

const identity = "Bonjour" + " " + prenom + " " + "vous avez" + " " + age + " " + "ans";
//bonjour + elevan + vous avez + 16 + ans 

majuscule = identity.toUpperCase() ;

console.log(identity); // l'adition de tout les string + la variable prenom et age
console.log(majuscule); // on a pris le texte dan idenity pour le passer en maj

age = prompt();

if (age<=0){
    console.log("vous etes un poisson (pane)");
}else if (age<=120){
    console.log("Votre age est valide");
}else{
    console.log("je ne suit pas daccord");
}

if (age>=21 || age ){
    console.log("vous etes majeur")
}else if(age<21 && age>=18){
    console.log("vous etes majeur mais pas au usa")
}else {
    console.log("vous etes mineur")
}
// && || !

