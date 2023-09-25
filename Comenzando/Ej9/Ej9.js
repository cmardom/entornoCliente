// hay que reescribir los ejercicios anteriores como funciones
// copiar y pegar
function Ej1 (){
    let num1 = prompt('Escribe un número');
    let num2 = prompt('Escribe otro número');

    if (num1 > num2) {
        console.log('El número ' + num1 + ' es mayor que ' + num2);
    } else if (num2 > num1) {
        console.log('El número ' + num2 + ' es mayor que ' + num1);
    } else if (num1 === num2) {
        console.log('Son iguales');
    }
    // let resultado = (num1 < num2) ? 'El numero ' + num1 + ' es mayor que ' + num2 : 'El número ' + num2 + ' es mayor que ' + num1 ;
    // console.log(resultado);
}

function Ej2(){
    let control = true;
    let st1, st2;
    let num1, num2;

    do {
        st1 = prompt('Introduce un numero');

        if (st1.length === 0) {
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

        if (st2.length === 0) {
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
    } else if (num1 === num2) {
        console.log('Son iguales');
    }
}

function Ej3(){
    let contador = 0;
    let suma = 0;
    let entradaNumerica = 0;

    do {
        let entrada = prompt('Introduce un numero. El programa se detendra cuando introduzcas un negativo');
        entradaNumerica = parseInt(entrada);
        suma += entradaNumerica;
        contador++;
    } while(entradaNumerica > 0);

    let media = suma / contador;
    console.log('La media de los numeros introducidos es:  ' + media);
}

function Ej4(){
    let st1, st2;
    let num1, num2;

    st1 = prompt('Introduce un numero');
    st2 = prompt('Introduce otro numero');

    num1 = parseInt(st1);
    num2 = parseInt(st2);

    for (let i = num1; i <= num2; i++) {
        console.log(i);
    }
}

function Ej5(){
    let st1, st2;
    let num1, num2;

    st1 = prompt('Introduce un numero');
    st2 = prompt('Introduce otro numero');

    num1 = parseInt(st1);
    num2 = parseInt(st2);

    for (let i = num1; i <= num2; i++) {
        if (i % 2 === !0){
            console.log(i);
        }
    }
}

function Ej6(){
    let st1;
    let num;

    st1 = prompt('Introduce un numero');

    num = parseInt(st1);

    for (let i = 0; i <= num; i++) {
        if (num % i === 0){
            console.log('El numero ' + num + ' es divisor de ' + i);
        }
    }
}

function Ej7(){
    let st1;
    let num;
    let control = true;


    do{
        st1 = prompt('Introduce un numero');

        if (st1.length === 0){
            console.log('No has introducido nada')
            continue;
        }

        num = parseInt(st1);

        if (isNaN(num)){
            console.log('No es un numero');
            continue;
        }

        if (num % 2 === 0){
            console.log('Es par');
        } else {
            console.log('Es impar');
        }
        control = false;

    } while (control);
}

function Ej8(){
    let num, resultado;
    let st;
    let control = true;


    do{
        st = prompt('Introduce un numero');

        if (st.length === 0){
            console.log('No has introducido nada')
            continue;
        }

        num = parseInt(st);

        if (isNaN(num)){
            console.log('No es un numero');
            continue;
        }

        control = false;

    } while (control);

    for (let i = 1; i <= 10; i++) {
        resultado = num * i;
        console.log(num + ' x ' + i +' = ' + resultado);
    }
}

let control = true;
do{
    let opcion = prompt('Menu');
    switch (opcion){
        case "1": Ej1();
        break;
        case "2": Ej2();
        break;
        case "3": Ej3();
        break;
        case "4": Ej4();
        break;
        case "5": Ej5();
        break;
        case "6": Ej6();
        break;
        case "7": Ej7();
        break;
        default: control = false;
    }
} while (control);