// Mostrar todos los números impares que hay entre dos números introducidos por el usuario.

let st1, st2;
let num1, num2;

st1 = prompt('Introduce un numero');
st2 = prompt('Introduce otro numero');

num1 = parseInt(st1);
num2 = parseInt(st2);

for (let i = num1; i <= num2; i++) {
    if (i % 2 == !0){
        console.log(i);
    }
}