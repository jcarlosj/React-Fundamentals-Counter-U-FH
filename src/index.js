//  Funcion asignada a una constante
const saludar = function ( nombre ) {
    return `Primer saludo para: ${ nombre }`;
}

saludo = 9;                 //  Asigna el valor a una variable que se llama como la funcion
console .log( saludo );     //  Genera un Error y muestra un Warning. Si no asignaramos en la linea anterior imprime la referencia de la funcion no seria invocada

