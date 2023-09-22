// Mejora el ejercicio anterior. Si los números no son número o son menores o iguales a cero,
//     nos los vuelva a pedir. Podéis utilizar la función isNaN aunque no es necesario.


    // let num1 = prompt('Escribe un número', '');
    // let num2 = prompt('Escribe otro número', '');
// if (num1 > num2) {
//     console.log('El número ' + num1 + ' es mayor que ' + num2);
// } else if (num2 > num1) {
//     console.log('El número ' + num2 + ' es mayor que ' + num1);
// } else if (num1 == num2) {
//     console.log('Son iguales');
// } else if (!isNaN(+num1) || (!isNaN(+num2))){
//     console.log('Uno de los números no es un número');
// }

// let resultado = (num1 < num2) ? 'El numero ' + num1 + ' es mayor que ' + num2 : 'El número ' + num2 + ' es mayor que ' + num1 ;
// console.log(resultado);
let control = true;

     let num1 = prompt('Escribe un número', '');
     let num2 = prompt('Escribe otro número', '');
while(control) {
    if (isNaN(num1)){
        num1 = prompt('Vuelve a introducir el primer número');
    } else if(isNaN(num2)){
        num2 = prompt('Vuelve a introducir el segundo número');
    }

    if (num1 === ""){
        num1 = prompt('No has introducido el primer número');
    } else if (num2 === ""){
        num2 = prompt('No has introducido el segundo número');
    }

    if (num1 > num2) {

        console.log('El número ' + num1 + ' es mayor que ' + num2);
        control = false;

    } else if (num2 > num1) {

        console.log('El número ' + num2 + ' es mayor que ' + num1);
        control = false;

    } else if (num1 == num2) {

        console.log('Son iguales');
        control = false;
    }
     // var num1INT = parseInt(num1);
     // var num2INT = parseInt(num2);
}

//isNaN(+num); = da error al convertirlo en numero?

