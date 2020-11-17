import { getHeroById } from './data-hero';

export const getHeroByIdAsync = id => {

    return new Promise( ( resolve, reject ) => {
        const time = 1.5;     //  1 segundo y medio

        setTimeout( () => {
            const hero = getHeroById( id );

            hero ? resolve( hero ) : reject( 'Heroe no existe' );

        }, time * 1000 );
    });
}