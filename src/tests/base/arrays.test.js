import '@testing-library/jest-dom';

import { getFruits } from '../../base/arrays';

describe( 'arrays', () => {

    test( 'getData should return an array with two indices', () => {
        
        const dataArray = getFruits();     //  [ 'Manzanas', 9 ]

        expect( dataArray.length ).toEqual( 2 );

    });
    
    test( 'getFruits should return an array with a string and a number', () => {
        
        const [ words, numbers ] = getFruits();     //  [ 'Manzanas', 9 ]

        expect( typeof words ).toBe( 'string' );    //  Valida el tipo
        expect( words ).toBe( 'Manzanas' );         //  Valida el tipo y valor

        expect( typeof numbers ).toBe( 'number' );
        expect( numbers ).toBe( 9 );

    });

});
