let a = 10; 
let b = 23;
let nombre = 'Juan';

let c = a + b;

nombre = 'Juan Carlos';

console.log(nombre, c);

// para debuguear en navegador: sources - breakpoint - f5 (actualizar)

//ALERT, PROMPT Y CONFIRM
//alert
alert('aviso');

//prompt
prompt('dime algo'); // pide info y se guarda en variable
let respuesta = prompt ('dime', 'escribe'); // para recoger variable. el segundo argumento es el placeholder
console.log(respuesta);

//confirm
confirm('aceptar o cancelar?'); // devuelve true o false


//Valores primitivos especiales
// null : sin valor asignado. La variable ya está definida y puede haber tenido valor antes, pero ahora no 
// undefined: Es un valor que dice que no tiene valor
// number: cualquier numero, no especifica entero o decimal...
// symbol: un valor que no es igual a ningun otro valor

// para saber el tipo: typeof
console.log(typeof nombre);


//ARRAYS
let array = [1, 2, 3, 'Antonio', 4];
// puede incluir varios tipos de datos dentro del mismo array
let array2 = [1, 2, 3, ['Antonio', 'Juan'], 5];
console.log(array, array2);

/* array[0];
1
array2[3][1]
'Juan' */

array2[3][1] = 'Paco';
console.log(array2[3][1]);

console.log(array2.length); // longitud
console.log(nombre.length);

console.log(array.indexOf(2)); // la posicion de cierto elemento del array

//añadir elementos a un array
// push - lo mete al final
array.push(15); // devuelve el tamaño del array resultante
// unshift - lo mete al principio
array.unshift(0);
// pop - sacar un elemento
array.pop(); // lo saca por el final 
// shift - saca por el final
array.shift();


//recorrer un array
array.forEach((elemento, indice, array) => {console.log(elemento, indice, array);}) // tres argumentos: 1 elemento, 2 indice, 3 array cno el que se trabaja
// las llaves son para definir un bloque de código y los argumentos van entre parentesis

//splice 0 2 elimina los dos primeros (desde el 0 elimina 2)

//OBJETOS LITERALES
let factura = {
    numero: 201,
    cliente: 'transporte sl',
    divisa: 'eur',
    subtotal: 205.25,
};

console.log(factura);

console.log(factura.numero); //para acceder a una variable del objeto

Object.entries(factura); // crea arrays multidimensionales en los que cada elementos son pares de propiedad, valor

factura.delete(numero); // devuelve true o false, elimina una propiedad

// freeze - impide modificar el objeto y no se puede descongelar
// getOwnPropertyNames - lista las propiedades que tiene

// ESTRUCTURAS DE CONTROL - operadores lógicos - todos igual excepto:
// == - compara diferentes tipos de datos
// === - compara mismo tipo de datos