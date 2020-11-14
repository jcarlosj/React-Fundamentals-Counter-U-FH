//  Destructuracion de Arreglos (o Asignación desestructurante)
const heroes = [ 'Superman', 'Wonder Woman', 'Batman' ];
console.log( heroes[ 1 ] );

const [ , lindaCarter ] = heroes;       //->  Asignacion destructurante
console.log( lindaCarter );


//  Destructurando el argumento de una funcion
const getNumber = ([ , , , , , number, , , , ]) => {    //  Destructura solo la posicion 6 del Array
    return number;
}

const 
    digits = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
    fiveNumber = getNumber( digits );

console.log( fiveNumber );

//  Destructurar datos retornados por una funcion
const dataAccount = () => {
    return [ '384768363-4', 'Eva Sofia', 550 ];
}

const [ , nombre, saldo ] = dataAccount();
console.log( nombre, saldo ); 

//  Destructurando el argumento de una funcion
const getInfo = ( value ) => {
    return [
        value,
        () => { console.log( 'Saludos terricola!' ); }
    ];
}

const dataArr = getInfo( 'Janeth' );
dataArr[ 1 ]();

const [ elNombre, saludo ] = getInfo( 'Janeth' );   //  saludo destructura la funcion retornada
console.log( elNombre );
saludo();