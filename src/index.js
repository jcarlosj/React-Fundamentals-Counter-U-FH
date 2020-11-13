//  Ventajas de las Funciones flecha 

const saludar1 = ( nombre ) => {
    return `Primer saludo para: ${ nombre }`;                          //  Return tradicional
}

const saludar2 = ( nombre ) => `Segundo saludo para: ${ nombre }`;      //  Return implicito de un valor primitivo

//  En ambos casos se debe invocar posterior a la inicializacion, diferente a lo que se hace con una funcion sin asignacion a una constante
console.log( saludar1( 'Eva Sofia' ) );
console.log( saludar2( 'Juan Carlos' ) );     

const user1 = ( nombre ) => {
    return {                        //  Return Tradicional de un Objeto  (Valor Complejo)
        user_id: 'se43254efdqw3r',
        name: nombre,
        email: 'user1@correo.co'
    }
}

const user2 = ( nombre ) => ({              //  Return Implicito de un Objeto (Valor Complejo)
    user_id: 're9874nr767e',
    name: nombre,
    email: 'user2@correo.co'
});

//  En ambos casos se debe invocar posterior a la inicializacion, diferente a lo que se hace con una funcion sin asignacion a una constante
console.log( user1( 'Eva Sofia' ) );
console.log( user2( 'Juan Carlos' ) );   