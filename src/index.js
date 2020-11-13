//  Funciones
function saludo( nombre ) {
    return `Primer saludo para: ${ nombre }`;
}

saludo = 9;                 //  Asigna el valor a una variable que se llama como la funcion
console .log( saludo );     //  Imprime 9 y genera un Warning. Si no asignaramos en la linea anterior imprime la referencia de la funcion no seria invocada

