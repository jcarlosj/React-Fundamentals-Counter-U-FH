//  Imports & Exports
import { heroes } from './data/heroes';

console.log( heroes );


const getHeroById = id => {
    return heroes.find( hero => {
        return hero.id === id;
    });
};
console.log( getHeroById( 3 ) ); 


const getOtherHeroById = hero_id => {
    return heroes.find( ({ id }) => {       //->  Asignacion destructurante
        return id === hero_id;
    });
};
console.log( getOtherHeroById( 3 ) ); 

//  Aplicamos el retorno implicito
const getNewHeroById = hero_id => {
    return heroes.find( ({ id }) => id === hero_id );
};
console.log( getNewHeroById( 3 ) ); 


const getHeroesByOwner = owner => {
    return heroes.filter( hero => hero.owner === owner );
};
console.log( getHeroesByOwner( 'Marvel' ) ); 