//  Imports & Exports
import { getHeroById } from './functions';

const getHeroByIdAsync = id => {

    //  Promises (Promesas)
    const promesa = new Promise( ( resolve, reject ) => {
        const seg = 2;

        setTimeout( () => {
            const hero = getHeroById( id );
            
            if( ! hero ) {
                reject( 'No se encontró el héroe' );
            } 

            resolve( hero );
            
        }, seg * 1000 );

    });

    return promesa;
}

getHeroByIdAsync( 4 )
    .then( data => {
        console.log( data );
    })
    .catch( err => {
        console.warn( err );
    })
    .finally();
