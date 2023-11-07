/*
FONCTIONS - PRÉPA 2 : Le minimum de deux nombres
1. En supposant que la fonction JavaScript Math.min() n'existe pas,
   déclarez la fonction calcMin pour qu'elle retourne
   le plus petit des deux nombres passés en paramètres
2. Utilisez ensuite votre fonction pour calculer
   - le minimum entre 4.5 et 5
   - le minimum entre 19 et 9
   - le minimum entre 1 et 1
N.B. Faites deux versions :
   - en utilisant la syntaxe classique
   - en utilisant une arrow function
*/
function calcMin(number1, number2) {
    if (number1 < number2) {
        console.log(`${number1} est le minimum`);
    } else if (number1 > number2) {
        console.log(`${number2} est le minimum`);
    } else {
        console.log(`${number1} est égal à ${number2}`);
    }
}
calcMin(4.5, 5);
calcMin(19, 9);
calcMin(1, 1);
// Syntaxe classique

const calcMin1 = (number1, number2) => {
    if (number1 < number2) {
        console.log(`${number1} est le minimum`);
    } else if (number1 > number2) {
        console.log(`${number2} est le minimum`);
    } else {
        console.log(`${number1} est égal à ${number2}`);
    }
}
calcMin1(4.5, 5);
calcMin1(19, 9);
calcMin1(1, 1);
// Utilisation de la fonction calcMin pour calculer le minimum


// Version avec une arrow function

// Utilisation de la fonction calcMinArrow pour calculer le minimum


// Version encore plus concise avec une arrow function
const calcMinConcise = (a, b) => (a < b) ? a : b;

// Utilisation de la fonction calcMinConcise pour calculer le minimum

