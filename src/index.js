//  Imports & Exports
import heroes, { owners } from './data/heroes';

console.log( heroes );
console.log( owners );

const getHeroesByOwner = owner => {
    return heroes.filter( hero => hero.owner === owner );
};
console.log( getHeroesByOwner( 'Marvel' ) ); 