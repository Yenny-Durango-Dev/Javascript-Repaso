// Ejercicios de cadenas de texto
// 1. Concatena dos cadenas de texto
// 2. Muestra la longitud de una cadena de texto
// 3. Muestra el primer y ultimo carácter de una cadena de texto
// 4. Convierte una cadena de texto a mayúsculas y minúsculas
// 5. Crea una cadena de texto en varias lineas
// 6. Interpola el valor de una variable en una cadena de texto
// 7. Reemplaza todos los espacios en blanco de un string por guiones
// 8. Comprueba si una cadena de texto contiene una palabra concreta
// 9. Comprueba si dos strings son iguales
// 10. Comprueba si dos strings tienen la misma longitud

// SOLUCIÓN
// punto 1
let cadena1 = "Hola";
let cadena2 = "Mundo";
let resultado = cadena1 + " " + cadena2;
console.log(resultado); // Imprime "Hola Mundo"

// punto 2
let cadena = "JavaScript es genial";
console.log(cadena.length); // Imprime 20, la longitud de la cadena

// punto 3
let cadena3 = "Programación";
console.log(cadena3[0]); // Imprime "P", el primer carácter de la cadena
console.log(cadena3[cadena3.length - 1]); // Imprime "n", el último carácter de la cadena   

// punto 4
let cadena4 = "JavaScript es divertido";
console.log(cadena4.toUpperCase()); // Convierte la cadena a mayúsculas
console.log(cadena4.toLowerCase()); // Convierte la cadena a minúsculas

// punto 5
let cadena5 = `Este es un ejemplo
de cadena de texto
en varias líneas
y con saltos de línea.`;
console.log(cadena5); // Imprime la cadena con saltos de línea

// punto 6
let nombre = "Yenny";
let edad = 30;
let mensaje = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
console.log(mensaje); // Imprime "Hola, mi nombre es Yenny y tengo 30 años."
// punto 7
let cadena6 = "Hola Mundo";
console.log(cadena6.replace(/ /g, "-")); // Reemplaza todos los espacios en blanco por guiones
// punto 8
let cadena7 = "JavaScript es genial";
let palabra = "genial";
console.log(cadena7.includes(palabra)); // Comprueba si la cadena contiene la palabra

// punto 9
let cadena8 = "Hola Mundo";
let cadena9 = "Hola Mundo";
console.log(cadena8 === cadena9); // Comprueba si las cadenas son iguales

// punto 10
let cadena10 = "JavaScript";
let cadena11 = "Python";
console.log(cadena10.length === cadena11.length); // Comprueba si las cadenas tienen la misma longitud
