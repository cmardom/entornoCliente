


//1.- Crea un documento con un arreglo llamado actividad1 que contenga 3 elementos.
let actividad1 = ['elem1', 'elem2', 'elem3'];
console.log("1. Array original con tres elementos:")
console.log(actividad1);

//2.- Añade un cuarto elemento al final del arreglo utilizando los métodos de los arreglos.
actividad1.push('elem4');
console.log("2. Array con un cuarto elemento al final:")
console.log(actividad1)

//3.- Añade un quinto elemento al comienzo del arreglo utilizando los métodos de los arreglos.
// Que guarde en una variable el nuevo tamaño del arreglo.
actividad1.unshift('elem5');
console.log("3. Array con un quinto elemento al principio:")
console.log(actividad1)

//4.-Que muestre por pantalla el arreglo y el tamaño.
console.log("4. Mostramos el arreglo y su tamaño");
console.log("El tamaño del array " + actividad1 + " es " + actividad1.length);

//5.- Que solicite por pantalla los datos necesarios para eliminar
// varios elementos de un array desde una posición concreta.
console.log("5. Solicitamos los datos para elimintar varios elementos en una posicion")
let posicion = prompt("Introduce posicion que quieres borrar: ");
let cantidad = prompt("Introduce cantidad de elementos que quieres borrar: ");

posicionInt = parseInt(posicion);
cantidadInt = parseInt(cantidad);

actividad1.splice(posicionInt, cantidadInt);
console.log(actividad1);

//6.- Que solicite por pantalla un valor y que devuelva el índice del arreglo
// donde se encuentra ese valor.
console.log("6. Pedimos un valor y devuelve el índice del array donde se encuentra");
let valor = prompt("Introduce valor a buscar:");
if (actividad1.indexOf(valor) >= 0){
    console.log(actividad1.indexOf(valor))
} else {
    console.log("No se encuentra");
}

// 7.- Que muestre por pantalla el arreglo y el tamaño.
console.log("7. El tamaño del array " + actividad1 + " es " + actividad1.length);

//8.- Busca al menos 2 métodos de los arreglos que encuentres interesantes y los utilizas.
console.log("8.1. Funcion isArray: Devuelve true si valor es un array, y false en caso contrario.");
console.log("Resultado: " + Array.isArray(actividad1));

console.log("8.2. Funcion from: Crea una nueva instancia de Array a partir de un objeto iterable o parecido a un array.");
let arrayCopiado = Array.from(actividad1);
console.log("Resultado: " + arrayCopiado);

// 9.- Utilizando los métodos, que devuelva el array creado de manera que esté ordenado alfabéticamente.
console.log("9. Ordenamos el array");
console.log(actividad1.sort());

//10.- Utilizando los métodos, que devuelva el array creado de manera que esté ordenado al contrario.
console.log("10. Ordenamos el array al revés");
console.log(actividad1.reverse());

// 11.- Investiga para encontrar un método dentro de la librería underscore.js
// que nos desordene los elementos de un arreglo.
// Este arreglo desordenado lo almacenará en una copia.
// Muestra que se vea el arreglo ordenado y desordenado
console.log("Array ordenado:");
console.log(actividad1.sort());

console.log("Array desordenado y copiado: ");
let arrayCopiado2 = Array.from(actividad1);
console.log(_.shuffle(arrayCopiado2));


