//  Imports & Exports
import heroes from './data/heroes';

console.log( heroes );

const getHeroesByOwner = owner => {
    return heroes.filter( hero => hero.owner === owner );
};
console.log( getHeroesByOwner( 'Marvel' ) ); 