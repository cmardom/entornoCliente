// Utilizando un bucle, mostrar la suma y la media de los números introducidos hasta
// introducir un número negativo y ahí mostrar el resultado.

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
