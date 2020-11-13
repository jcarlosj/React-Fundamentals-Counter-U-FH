//  Variables y constantes
const 
    firstName = 'Juan',
    lastName = 'Jiménez';

console.log( firstName + ' ' + lastName );
console.log( `${ firstName } ${ lastName }` );      //  Template String usando Backtick/Backquote

const fullName = `      //  Template String: Permite hacer saltos de linea y generar espacios dentro del contenido de una variable
    ${ firstName } 
    ${ lastName }
    ${ 6 * 7 }
`;
console.log( fullName );

//  Function
function getFullName( fullName ) {
    return `Hola, ${ fullName }.`;      //  Template String
}

console.log( `${ getFullName( `${ firstName } ${ lastName }` ) } ¿Cómo estas?` );   //  Template String
