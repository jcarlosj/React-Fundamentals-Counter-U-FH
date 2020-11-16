import '@testing-library/jest-dom';

import { getHeroById, getHeroesByOwner } from '../../base/data-hero';
import heroes from '../../data/heroes';

describe( 'hero functions', () => {

    test( 'a hero should return by id', () => {
        
        const
            id = 1, 
            hero = getHeroById( id ),
            dataHeroes = heroes.find( h => h.id === id );

        expect( hero ).toEqual( dataHeroes );

    });

    test( 'should return "undefined" if there is no hero', () => {
        
        const
            id = 9, 
            hero = getHeroById( id );

        expect( hero ).toBe( undefined );

    });

    test( 'should return arrangement with DC heroes', () => {
       
        const 
            owner = 'DC',
            heroesData = getHeroesByOwner( owner ),
            dcHeroes = heroes.filter( hero => hero.owner === owner );

        expect( dcHeroes ).toEqual( heroesData );
        expect( dcHeroes.length ).toBe( 3 );

    });

    test( 'should return arrangement with Marvel heroes', () => {
       
        const 
            owner = 'Marvel',
            heroesData = getHeroesByOwner( owner ),
            marvelHeroes = heroes.filter( hero => hero.owner === owner );

        expect( marvelHeroes ).toEqual( heroesData );
        expect( marvelHeroes.length ).toBe( 2 );

    });

});
