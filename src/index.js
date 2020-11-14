//  Imports & Exports
import { getHeroById } from './functions';

const getHeroByIdAsync = ( id = 1 ) => {

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

getHeroByIdAsync( 9 )
    .then( console.log )        //  Forma Abreviada
    .catch( console.warn )      //  Forma Abreviada
    .finally( () => {

        getHeroByIdAsync()
            .then( console.log )        //  Forma Abreviada
            .catch( console.warn );     //  Forma Abreviada 

    });
