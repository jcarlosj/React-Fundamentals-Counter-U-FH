//  Variables y constantes
const 
    firstName = 'Juan',
    lastName = 'Jiménez';

let number = 42;

console.log( firstName, lastName, number );

if( true ) {
    const firstName = 'Carlos';
    let number = 9;

    console.log( 'if:', firstName, lastName, number );    //  Scope: solo involucra valores dentro del condicional
}

console.log( firstName, lastName, number );