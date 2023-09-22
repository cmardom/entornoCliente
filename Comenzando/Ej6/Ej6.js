//Mostrar todos los números divisores de un numero introduce en prompt
let st1;
let num;

st1 = prompt('Introduce un numero');

num = parseInt(st1);

for (let i = 0; i <= num; i++) {
    if (num % i == 0){
        console.log('El numero ' + num + ' es divisor de ' + i);
    }
}