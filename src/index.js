//  Imports & Exports
import { getHeroById } from './functions';

//  Promises (Promesas)
const promesa = new Promise( ( resolve, reject ) => {
    const seg = 2;

    setTimeout( () => {
        const hero = getHeroById( 2 );
        
        if( ! hero ) {
            reject( 'No se encontró el héroe' );
        } 

        resolve( hero );
        
    }, seg * 1000 );

});

promesa 
    .then( data => {
        console.log( data );
    })
    .catch( err => {
        console.warn( err );
    })
    .finally();
