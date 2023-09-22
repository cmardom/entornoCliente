// Mejora el ejercicio anterior. Si los números no son número o son menores o iguales a cero,
//     nos los vuelva a pedir. Podéis utilizar la función isNaN aunque no es necesario.

// let resultado = (num1 < num2) ? 'El numero ' + num1 + ' es mayor que ' + num2 : 'El número ' + num2 + ' es mayor que ' + num1 ;
// console.log(resultado);
let control = true;
let st1, st2;
let num1, num2;

do {
    st1 = prompt('Introduce un numero');

    if (st1.length == 0) {
        console.log('No has introducido nada como primer numero');
        continue;
    }

    num1 = parseInt(st1);

    if (isNaN(num1)){
        console.log('No es un numero');
        continue;
    }

    control = false;
} while (control);

control = true;
do {
    st2 = prompt('Introduce otro numero');

    if (st2.length == 0) {
        console.log('No has introducido nada como segundo numero');
        continue;
    }

    num2 = parseInt(st2);

    if (isNaN(num2)){
        console.log('No es un numero');
        continue;
    }

    control = false;
} while (control);

if (num1 > num2) {
    console.log('El número ' + num1 + ' es mayor que ' + num2);
} else if (num2 > num1) {
    console.log('El número ' + num2 + ' es mayor que ' + num1);
} else if (num1 == num2) {
    console.log('Son iguales');
}



//isNaN(+num); = da error al convertirlo en numero?

