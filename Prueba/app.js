
alert('mensaje de aviso')// si se pone al principio, primero carga el mensaje y después la página

console.log('hola');

//tipos de variables
// let - el más usado, respeta los ámbitos de la variable
// var - se desaconseja porque su ambito es global y puede hacer que otra variable cambie
// const - no cambia

// no tipado : no se especifica el tipo, a un número se le puede asignar cadena de caracteres
// se aconsejan nombres descriptivos : st_nombre (string)
// i, j, k para contadores  

//typescript : se puede definir el tipo de variable
let a=10, b=20; //se pueden definir en bloque separadas por comas
let c = 10,
    d = 20;
let cadena1 = "texto";
cadena1 = "hola" //para reasignar no se pone let

//concatenar valores
console.log("a " +a); // lo convierte todo a cadena, y lo une sin espacio
console.log('a', a); // con la coma lo concatena y lo separa

console.log('a = ', a); // para ver el valor de a
console.log({a}); // otra forma de ver el valor de a, con llaves

console.log('%c Mensaje formateado', 'color: blue'); // %indica código CSS, el mensaje saldrá de color azul