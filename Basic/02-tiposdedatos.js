// tipos de datos en javascript

// string: cadena de texto, se define con comillas simples, dobles o invertidas
let nombre = "Yenny"; //Comando para declarar una variable con un string con comillas dobles
let alias = 'Yelbondiga'; //Comando para declarar una variable con un string con comillas simples
let email = `correo@gmail.com`; //Comando para declarar una variable con un string con comillas invertidas
console.log(nombre,alias,email);

// number: número, se define con un número
let age = 20 //Comando para declarar una variable con un número entero
let height = 1.55 //Comando para declarar una variable con un número decimal
console.log(age,height);

// boolean: booleano, se define con true o false
let isTrue = true //Comando para declarar una variable con un booleano verdadero
let isFalse = false //Comando para declarar una variable con un booleano falso
console.log(isTrue,isFalse);

//undefined: indefinido, se define con undefined
let indefinido //Comando para declarar una variable sin valor
console.log(indefinido);

//null: nulo, se define con null
let nulo = null //Comando para declarar una variable con un valor nulo
console.log(nulo);

//symboll: simbolo, se define con Symbol()
let simbolo = Symbol("mysymbol") //Comando para declarar una variable con un simbolo, son valores unicos que pueden ser utilizados como identificadores de propiedades de objetos y sirven para evitar colisiones de nombres
console.log(simbolo);

//bigint: entero grande, se define con BigInt()
let bigInt = BigInt(1234567890123456789012345678901234567890) //Comando para declarar una variable con un entero grande
let bigInt2 = 1234567890123456789012345678901234567890n //Comando para declarar una variable con un entero grande con la letra n al final
console.log(bigInt,bigInt2);

// mostrar el tipo de dato de cada variable
//Comando para imprimir el tipo de dato de la variable en la consola
console.log(typeof nombre); 
console.log(typeof alias);
console.log(typeof email);
console.log(typeof age);
console.log(typeof height);
console.log(typeof isTrue);
console.log(typeof isFalse);
console.log(typeof indefinido);
console.log(typeof nulo);
console.log(typeof simbolo);
console.log(typeof bigInt);
console.log(typeof bigInt2);

