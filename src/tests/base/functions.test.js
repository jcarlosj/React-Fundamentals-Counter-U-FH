import '@testing-library/jest-dom';

import { getUserData, getUserActive } from '../../base/functions';

describe( 'functions', () => {
    
    test( 'getUserData should return an object', () => {
        
        const 
            userTest = {
                uid: 'uo348e3heuw1',
                username: 'jangojes'
            },
            userData = getUserData();
        
        expect( userData ).toEqual( userTest );

    });

    test( 'getUserActive should return an object by passing it a string', () => {
        
        const
            username = 'jcarlosj',
            userTest = {
                uid: 'uo348e3heuw1',
                username: 'jcarlosj'
            },
            userData = getUserActive( username );

        expect( userData ).toEqual( userTest );

    });
    

});
