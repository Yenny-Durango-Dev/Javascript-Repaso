// Operadores en JavaScript

// Operadores aritmeticos
let a = 20;
let b = 25;

console.log(a + b); // Suma
console.log(a - b); // Resta
console.log(a * b); // Multiplicación
console.log(a / b); // División

console.log(a % b); // Módulo
console.log(a ** b); // Exponente (a elevado a la b)

a++; // Incremento
console.log(a); // Imprime 21, ya que a se incrementa en 1

b--; // Decremento
console.log(b); // Imprime 24, ya que b se decrementa en 1

// Operadores de asignación
let myVariable = 10; // Asignación inicial
console.log(myVariable); // Imprime 10
myVariable += 2; // Suma y asigna
console.log(myVariable); // Imprime 12
myVariable -= 2; // Resta y asigna
console.log(myVariable); // Imprime 10
myVariable *= 2; // Multiplica y asigna
console.log(myVariable); // Imprime 20
myVariable /= 2; // Divide y asigna
console.log(myVariable); // Imprime 10
myVariable %= 2; // Módulo y asigna
console.log(myVariable); // Imprime 0
myVariable **= 2; // Exponente y asigna
console.log(myVariable); // Imprime 0, ya que 0 elevado a cualquier número es 0
myVariable++; // Incremento y asigna
console.log(myVariable); // Imprime 1, ya que se incrementa en 1
myVariable--; // Decremento y asigna
console.log(myVariable); // Imprime 0, ya que se decrementa en 1

// Operadores de comparación
console.log(a > b); // Mayor que
console.log(a < b); // Menor que
console.log(a >= b); // Mayor o igual que
console.log(a <= b); // Menor o igual que
console.log(a == 10); // Igual que 10
console.log(a == "10"); // Igual que 10 (coerción de tipo)
console.log(a == b); // Igual que
console.log(a != b); // Diferente que
console.log(a === b); // Igualdad por identidad (mismo valor y tipo)
console.log(a !== b); // Diferente y del mismo tipo
console.log(0 === false); // Igualdad estricta (0 es igual a false)
console.log(1 == false); // Igualdad con coerción de tipo (1 es igual a false)
console.log(0 == ""); // Igualdad con coerción de tipo (0 es igual a "")
console.log(0 == "Hola"); // Igualdad con coerción de tipo (0 no es igual a "Hola")
console.log(undefined == null); // Igualdad con coerción de tipo (undefined es igual a null)
console.log(undefined === null); // Igualdad estricta (undefined no es igual a null)

// Truthy values (valores verdaderos)
// Todas las cadenas de texto menos las vacías
// El booleano true

// Falsy values (valores falsos)
// 0
// 0n
// ""
// null
// undefined
// NaN
// El booleano false
// Cadenas de texto vacías ("") son falsy

// Operadores lógicos
// AND (&&)
console.log(true && true); // AND lógico (true)
console.log(true && false); // AND lógico (false)
console.log(5 > 10 && 15 > 20); // AND lógico (false), si las 2 condiciones son falsas, el resultado es false
console.log(5 < 10 && 15 < 20); // AND lógico (true), si las 2 condiciones son verdaderas, el resultado es true
console.log(5 < 10 && 15 > 20); // AND lógico (false), si una de las condiciones es falsa, el resultado es false

// OR (||)
console.log(true || true); // OR lógico (true)
console.log(true || false); // OR lógico (true)
console.log(false || false); // OR lógico (false)
console.log(5 > 10 || 15 > 20); // OR lógico (false), si las 2 condiciones son falsas, el resultado es false
console.log(5 < 10 || 15 < 20); // OR lógico (true), si una de las condiciones es verdadera, el resultado es true
console.log(5 < 10 || 15 > 20); // OR lógico (true), si una de las condiciones es verdadera, el resultado es true

console.log(5 > 10 && 15 > 20 || 30 < 40); // OR lógico (true), si una de las condiciones es verdadera, el resultado es true

// NOT (!)
console.log(!(5 > 10 && 15 > 20)) // NOT lógico (true), invierte el resultado de la expresión
console.log(!(5 > 10 || 15 > 20)) // NOT lógico (true), invierte el resultado de la expresión

// Operadores ternarios
const isRaining = true;
// Operador ternario: condición ? valorSiVerdadero : valorSiFalso
isRaining ? console.log("Lleva paraguas") : console.log("No es necesario llevar paraguas");