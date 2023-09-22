// 7.- Que nos diga si un número es par o impar.
//  Ventana prompt
//  Si no es válido que nos pida de nuevo el numero

let st1;
let num;
let control;


do{
    st1 = prompt('Introduce un numero');
    num = parseInt(st1);

    // console.log(num);
    if (isNaN(num)){
        console.log('No es un numero');
        continue;
    }

    console.log('hola');
    if (num % 2 == 0){
        console.log('Es par');

    } else {
        console.log('Es impar');
    }
    control = false;

} while (control);

