import '@testing-library/jest-dom';

import { getImageApiGiphy } from '../../base/async-await';

describe( 'async/await & FetchAPI', () => {
    
    test( 'should return image url', async () => {
        
        const urlImage = await getImageApiGiphy();

        console.log( urlImage );

        expect( typeof urlImage ).toBe( 'string' );
        expect( urlImage.includes( 'http://' ) ).toBe( true );

    });

});
