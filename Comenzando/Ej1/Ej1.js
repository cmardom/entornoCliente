// Proyecto que pida dos números y que nos diga cual es mayor, menor o si son iguales.
// Realizar el ejercicio con estructuras if y con el operador condicional ternario.

let num1 = prompt('Escribe un número', '');
let num2 = prompt('Escribe otro número', '');

if (num1 > num2) {
    console.log('El número ' + num1 + ' es mayor que ' + num2);
} else if (num2 > num1) {
    console.log('El número ' + num2 + ' es mayor que ' + num1);
} else if (num1 == num2) {
    console.log('Son iguales');
}

// let resultado = (num1 < num2) ? 'El numero ' + num1 + ' es mayor que ' + num2 : 'El número ' + num2 + ' es mayor que ' + num1 ;
// console.log(resultado);
