import '@testing-library/jest-dom';

import { getHeroByIdAsync } from '../../base/promises';
import heroes from '../../data/heroes';

describe( 'promises', () => {
   
    test( 'should return a hero asynchronously', ( done ) => {
        const id = 1;
        
        getHeroByIdAsync( id )
            .then( hero => {
                expect( hero ).toBe( heroes[ 0 ] );     //  Batman
                done();     //->    Para indicar que la prueba asincrona a terminado
            });

    });
    
    test( 'should return an error message asynchronously if the hero does not exist', ( done ) => {
        const 
            id = 9,
            errorMessage = 'Heroe no existe';
        
        getHeroByIdAsync( id )
            .catch( err => {
                expect( err ).toBe( errorMessage );
                done();     //->    Para indicar que la prueba asincrona a terminado
            });

    });

});
