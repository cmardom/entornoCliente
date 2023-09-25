
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


// Los tipos primitivos se copian por valor.
// Las copias se hacen con un determinado método dependiendo de su tipo.
// Se convierte a string con stringify
// Las copias de objetos se hacen con JSON.parse(JSON.stringify(s1)))

// s1 = s2 // apuntan a la misma dirección de memoria y tienen tipos primitivos
// s3 = {..s1} // tiene el mismo valor, pero diferente referencia

/*FUNCIONES*/
function saludar(){
 console.log('hola');
}

// Anónimas o lambda: no tienen nombre y se pueden asignar a una variable
const saludar2 = function () {
 console.log('hola otra vez');
}

saludar();
saludar2();

// las funciones reciben variables, y al ser variables pueden recibir funciones
function discount (value){
 return(value * 0.8);
}
function total (x, func){
 console.log(func(x));
}

total (120, discount);

// función flecha: permite hacer la asignación de variables sin poner 'function'
const sumar = (a, b) => {return a+b;}; //Con llaves siempre hay que poner return
const sumar = (a, b) => a+b; //Cuando solo hay una instruccion (devolucion) se pueden omitir las llaves.