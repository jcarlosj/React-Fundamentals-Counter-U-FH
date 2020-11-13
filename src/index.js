//  Arreglos
const frutas = new Array( 10 );     //  Asigna longitud por defecto para un Array
frutas.push( 'Mango' );             //  Agrega un elemento modificando la longitud inicial (evitar insertar elementos usando push)

console.log( frutas );

const 
    numeros = [ 1, 2, 3, 4 ],
    numeros2 = numeros,                //  Asignacion por referencia. Son el mismo objeto (muneros y numeros2 ), es decir hay mutacion
    numeros3 = [ ...numeros, 5 ];      //  Clona el objeto usando el Spread e inserta nuevo elemento. Ahora son dos objetos diferentes ( numeros y numeros3 ) es decir no hay mutacion)

console.log( numeros2 );     //  numeros2 es el mismo objeto de numeros
console.log( numeros3 );     //  numeros3 es un objeto nuevo 

/** Crear un nuevo Array usando la funcion map() */
const numeros4 = numeros3.map( function( numero ) {
    return numero * 3;          //  Si no se asigna return devolvera undefined por cada posicion del Array
});

console.log( numeros4 );        //  Se muestra un Array nuevo a partir del mapeo de numeros3 