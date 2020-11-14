//  Operador Ternario
const active = true;
let message = '';

//  Condicional if-else tradicional
if( ! active ) {
    message = 'Activo';
}
else {
    message = 'Inactivo';
}

console.log( message );                     //  Inactivo

//  Ejemplo anterior escrito con el operador ternario
const msg = ! active ? 'Activo' : 'Inactivo';
console.log( msg );                         //  Inactivo

//  Ejemplo anterior abreviado 
const mensajito = ! active && 'Activo';     //  Equivale a escribir un if simple
console.log( mensajito );                   //  false
