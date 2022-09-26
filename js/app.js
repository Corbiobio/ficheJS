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
    console.log("vous etes majeur");
}else if(age<21 && age>=18){
    console.log("vous etes majeur mais pas au usa");
}else {
    console.log("vous etes mineur");
}
// && || !


function direBonjour(){
    console.log("bonjour");
}
// direBonjour()

function direBonjourAkelkain(name){
    console.log("bonjour" + name );
}
// direBonjourAkelkain("mon nom")

function hello(name,city){
    console.log("bonjour" + " " + name + " " + "vous habitez" + " " + city);
    if (city == undefined ){
        console.log("vous habitez a lyon");
    }
}
// hello("moi",);

function add(a,b){
    console.log(a + b);
}
//add(10,5);

function div(a,b){
    console.log(a/b);
}
// div(10,2);

function positive(num){
    if(num >= 0){
        console.log("vraix");
    }else{
        console.log("faux");
    }
}
// positive(-10);

age = parseInt(age);
// console.log(age);

let verifier_nombre = isNaN(age); 
console.log(age);
console.log(verifier_nombre);

function isvalid(userinput){
    userinput = parseInt(userinput)
    if(isNaN(userinput)){
        return false;
    }
    return (userinput >= 12 && userinput <= 90);
}
// console.log(isvalid(21));

let resultat = isvalid(age);

let resultatinverse = !resultat
console.log(resultat);
console.log(resultatinverse);

// ligne 79
// let index = 99
// while (index >= 3) {
//     console.log(index);
//     index -= 3 ; 
// };

//boucle test
// let index = 0 
// while( index <= 100 ){
//     console.log(index);
//     index ++ ;
// };

let index = 0 
let a = ""
while( index <= 100 ){
    if(index <= 10 || index >=90 && index <=100){
        a = a + index 
    } ;
    index ++ ;
};
console.log(a);

//ligne 82
let key = 0 ;
while(key > 100){
    console.log(key);
    key++ ;
}
//remplacer > par < 

let id = 0 ;
do {
    console.log(id);
    id++ ;
} while (id > 100);

