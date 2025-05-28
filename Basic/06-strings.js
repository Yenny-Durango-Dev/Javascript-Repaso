// Strings
// concatenacion de cadenas
let nombre = "Yenny";
let saludo = "Hola, " + nombre + "!"; // Concatenación con el operador +
console.log(saludo); // Imprime "Hola, Yenny!"
console.log(typeof saludo); // Imprime "string"

// longitud de una cadena
console.log(saludo.length); // Imprime 13, la longitud de la cadena

// acceso a caracteres
console.log(saludo[0]); // Imprime "H", el primer carácter de la cadena

// Metodos comunes de cadenas
console.log(saludo.toUpperCase()); // Convierte la cadena a mayúsculas
console.log(saludo.toLowerCase()); // Convierte la cadena a minúsculas
console.log(saludo.indexOf("Yenny")); // Busca la posición de "Yenny" en la cadena, devuelve 6
console.log(saludo.includes("Yenny")); // Comprueba si "Yenny" está en la cadena, devuelve true
console.log(saludo.slice(0, 5)); // Imprime "Hola," extrae los primeros 5 caracteres
console.log(saludo.replace("Yenny", "Mundo")); // Reemplaza "Yenny" por "Mundo", imprime "Hola, Mundo!"

// Plantillas literales (template literals)
let mensaje = `La batalla ha
empezado en un mundo muy cuadrado
creppers y zombies se enfrentan
en una lucha sin cuartel`;
console.log(mensaje); // Imprime el mensaje con saltos de línea
console.log(`¿Cual es el mensaje de hoy?: ${mensaje}`); // Imprime el mensaje con interpolación de variables
let email = "yenny@gmail.com";
console.log(`Hola, ${nombre}! Tu email es: ${email}`); // Imprime el saludo con el email