// Que muestre la tabla de multiplicar de un valor introducido por pantalla.

let num, resultado;
let st;
let control = true;


do{
    st = prompt('Introduce un numero');

    if (st.length == 0){
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