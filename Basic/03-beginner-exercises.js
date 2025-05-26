// ejercicios de nivel básico

// 1. Escribir un comentario en una línea
// Este es un comentario en una línea

// 2. Escribir un comentario en varias líneas
/*
Hola a todo el mundo,
mi nombre es Yenny Durango,
tengo 20 años, y estoy aprendiendo JavaScript.
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivo
let nombre = "Yenny"; // String
let edad = 20; // Number
let altura = 1.55; 
let esEstudiante = true; // Boolean
let sinDefinir; // Undefined
let nulo = null; // Null
let simbolo = Symbol("kiriku"); // Symbol
let numeroGrande = BigInt(25652025220320051010200432153854973017910078); // BigInt


// 4. Imprime por consola el valor de todas las variables
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Altura:", altura);
console.log("Es estudiante:", esEstudiante);
console.log("Sin definir:", sinDefinir);
console.log("Nulo:", nulo);
console.log("Símbolo:", simbolo);
console.log("Número grande:", numeroGrande);

// 5. Imprime por consola el tipo de dato de cada variable
console.log("Tipo de dato de nombre:", typeof nombre);
console.log("Tipo de dato de edad:", typeof edad);
console.log("Tipo de dato de altura:", typeof altura);
console.log("Tipo de dato de esEstudiante:", typeof esEstudiante);
console.log("Tipo de dato de sinDefinir:", typeof sinDefinir);
console.log("Tipo de dato de nulo:", typeof nulo);
console.log("Tipo de dato de simbolo:", typeof simbolo);
console.log("Tipo de dato de numeroGrande:", typeof numeroGrande);

// 6. A continuacion, modifica los valores de las variables por otros del mismo tipo
nombre = "Yelbondiga"; // Cambiando el string
edad = 21; // Cambiando el número
altura = 1.60; // Cambiando el número decimal
esEstudiante = false; // Cambiando el booleano
sinDefinir = undefined; // Cambiando el undefined
nulo = "Este es un valor nulo"; // Cambiando el null
simbolo = Symbol("nuevoSimbolo"); // Cambiando el símbolo
numeroGrande = BigInt(1234567890123456789012345678901234567890); // Cambiando el BigInt


// 7. A continuacion, modifica los valores de las variables por otros de distinto tipo
nombre = 12345; // Cambiando el string por un número
edad = "veinte"; // Cambiando el número por un string
altura = true; // Cambiando el número decimal por un booleano
esEstudiante = null; // Cambiando el booleano por un null
sinDefinir = Symbol("nuevoSimbolo"); // Cambiando el undefined por un símbolo
nulo = 3.14; // Cambiando el null por un número decimal
simbolo = 42; // Cambiando el símbolo por un número
numeroGrande = "un numero grande"; // Cambiando el BigInt por un string

// 8. Declara constantes con valores asociados a todos los datos de tipo primitivo
const nombreConstante = "Yenny"; // String
const edadConstante = 20; // Number
const alturaConstante = 1.55; // Number
const esEstudianteConstante = true; // Boolean
const sinDefinirConstante = undefined; // Undefined
const nuloConstante = null; // Null
const simboloConstante = Symbol("kiriku"); // Symbol
const numeroGrandeConstante = BigInt(25652025220320051010200432153854973017910078); // BigInt

// 9. A continuacion, modifica los valores de las constantes
nombreConstante = "Aguacate"; // Cambiando el string ERROR
edadConstante = 21; // Cambiando el número ERROR
alturaConstante = 1.60; // Cambiando el número decimal ERROR
esEstudianteConstante = false; // Cambiando el booleano ERROR
sinDefinirConstante = undefined; // Cambiando el undefined ERROR
nuloConstante = "Este es un valor nulo"; // Cambiando el null ERROR
simboloConstante = Symbol("nuevoSimbolo"); // Cambiando el símbolo ERROR
numeroGrandeConstante = BigInt(1234567890123456789012345678901234567890); // Cambiando el BigInt ERROR

// 10. Comenta las lineas que produzcan algun tipo de error al ejecutarse