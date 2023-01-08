/*# Définition de variables*/
let nom = "John";
console.log(nom)

nom = "Jane";
console.log(nom)

/*# Boucles*/

for(let i=1;i<=10;i++)
{
    console.log(i)
}

/*# console.log()*/


console.log("Bonjour tout le monde!")
console.log(3+4)
console.log(nom)

/*# Concaténation de chaînes de caractères*/

let firstName = "John";
let lastNAme = "Doe";

console.log(`John`,`Doe`);

/* # Conditions */

let age = 34;
if(age>=18) {
    console.log("Vous êtes majeur");
}
else {
    console.log("Vous êtes mineur");
}

/* # Création et parcours d'un tableau */

let couleur = ["rouge","vert","bleu","jaune","orange"];
console.log(couleur[0]);
console.log(couleur[1]);
console.log(couleur[2]);
console.log(couleur[3]);
console.log(couleur[4]);

for(let i=0;i<couleur.length;i++)
{
    console.log(couleur[i]);
}


/*# Utilisation de Array.push() et Array.pop() */


let numbers = [1,2,3,4,5];
numbers.push("6");
console.log(numbers)

numbers.pop("6")
console.log(numbers)