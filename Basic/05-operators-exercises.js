// ejercicios de operadores
// 1. Crea una variable para cada operacion aritmetica
// 2. Crea una variable para cada tipo de operacion de asignacion, que haga uso de las variables utilizadas para las operaciones aritmeticas
// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparacion
// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparacion
// 5. Utiliza el operador logico AND
// 6. Utiliza el operador logico OR
// 7. Combina ambos operadores logicos
// 8. Añade alguna negacion
// 9. Utiliza el operador ternario
// 10.Combina operadores aritmeticos, de comparacion y logicos

// SOLUCIÓN
// punto 1
let Numero1 = 16;
let Numero2 = 20;

let suma = Numero1 + Numero2; // Suma
let resta = Numero2 - Numero1; // Resta
let multiplicacion = Numero1 * Numero2; // Multiplicación
let division = Numero2 / Numero1; // División
let modulo = Numero2 % Numero1; // Módulo
let exponente = Numero1 ** 2; // Exponente
let incremento = Numero1++; // Incremento
let decremento = Numero2--; // Decremento
console.log("Resultados de las operaciones aritméticas:","Suma:", suma, "Resta:", resta, "Multiplicación:", multiplicacion, "División:", division, "Módulo:", modulo, "Exponente:", exponente, "Incremento:", incremento, "Decremento:", decremento);

// punto 2
let numero3 = 10;
let asignacionSuma = numero3 += 5; // Suma y asigna
let asignacionResta = numero3 -= 2; // Resta y asigna
let asignacionMultiplicacion = numero3 *= 2; // Multiplica y asigna
let asignacionDivision = numero3 /= 2; // Divide y asigna
let asignacionModulo = numero3 %= 3; // Módulo y asigna
let asignacionExponente = numero3 **= 2; // Exponente y asigna
let asignacionIncremento = numero3++; // Incremento y asigna
let asignacionDecremento = numero3--; // Decremento y asigna
console.log("Resultados de las operaciones de asignación:", "Suma y asigna:", asignacionSuma, "Resta y asigna:", asignacionResta, "Multiplica y asigna:", asignacionMultiplicacion, "Divide y asigna:", asignacionDivision, "Módulo y asigna:", asignacionModulo, "Exponente y asigna:", asignacionExponente, "Incremento y asigna:", asignacionIncremento, "Decremento y asigna:", asignacionDecremento);

// punto 3
let comparacion1 = (40 < 50); // Menor que
let comparacion2 = (20 > 10); // Mayor que
let comparacion3 = (18 >= 16); // Mayor o igual que
let comparacion4 = (15 <= 20); // Menor o igual que
let comparacion5 = (16 == 16); // Igual que 16

console.log("Comparaciones verdaderas:", comparacion1, comparacion2, comparacion3, comparacion4, comparacion5);

// punto 4
let comparacion6 = (30 < 20); // Menor que
let comparacion7 = (10 > 20); // Mayor que
let comparacion8 = (25 >= 30); // Mayor o igual que
let comparacion9 = (5 <= 2); // Menor o igual que
let comparacion10 = (10 == 5); // Igual que 5

console.log("Comparaciones falsas:", comparacion6, comparacion7, comparacion8, comparacion9, comparacion10);

// punto 5
let genero = "masculino";
let edad = 20;
let esMayorDeEdad = (edad >= 18 && genero === "masculino"); // AND lógico
console.log("Es un hombre mayor de edad:", esMayorDeEdad);

// punto 6
let tienePermiso = true;
let puedeConducir = (edad >= 18 || tienePermiso); // OR lógico
console.log("Puede conducir:", puedeConducir);

// punto 7
let tieneLicencia = true;
let puedeConducirConLicencia = (edad >= 18 && tienePermiso) || tieneLicencia; // Combina AND y OR
console.log("Puede conducir con licencia:", puedeConducirConLicencia);

// punto 8
let esMenorDeEdad = !(edad >= 18); // Negación
console.log("Es un hombre menor de edad:", esMenorDeEdad);

// punto 9
let resultado = (edad >= 18) ? "Es mayor de edad" : "Es menor de edad"; // Operador ternario
console.log("Resultado del operador ternario:", resultado);

// punto 10
let resultadoFinal = (edad >= 18 && genero === "masculino") ? "Es un hombre mayor de edad" : "No es un hombre mayor de edad"; // Combina operadores aritméticos, de comparación y lógicos
console.log("Resultado final:", resultadoFinal);

// LISTO CALISTO :D
