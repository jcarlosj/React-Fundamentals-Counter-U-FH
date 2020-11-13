//  Funcion tradicional asignada a una constante
const saludar1 = function ( nombre ) {
    return `Primer saludo para: ${ nombre }`;
}

//  Funcion flecha asignada a una constante
const saludar2 = ( nombre ) => {
    return `Segundo saludo para: ${ nombre }`;
}

//  En ambos casos se debe invocar posterior a la inicializacion, diferente a lo que se hace con una funcion sin asignacion a una constante
console.log( saludar1( 'Eva Sofia' ) );
console.log( saludar2( 'Juan Carlos' ) );     

