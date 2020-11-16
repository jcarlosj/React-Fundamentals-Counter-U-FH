import '@testing-library/jest-dom'

import { getGreetings } from '../../base/template-string';

describe( 'template-string', () => {
    
    test( 'it should return "Welcome Sofia!" if argument is passed', () => {

        const 
            name = "Sofia",
            string = getGreetings( name );

        console.log( string );

        expect( string ).toBe( 'Welcome, Sofia!' );

    });

    test( 'it should return "Welcome Carlos!" if no argument is passed', () => {
        const string = getGreetings();

        console.log( string );

        expect( string ).toBe( 'Welcome, Carlos!' );
    });
    
});
