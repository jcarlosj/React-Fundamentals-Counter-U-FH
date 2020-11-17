// import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import App from '../App';

describe( '<App />', () => {

//     test( 'it should display the message "Hola, Eva Sofia Janeth! (Forma 1)', () => {
    
//         const 
//             name = 'Eva Sofia Janeth',
//             title = 'Hola, Eva Sofia Janeth!',
//             { getByText } = render( <App name={ name } /> );        //  Monta el Componente de React & Extrae la propiedad del Componente

//         expect( getByText( title ) ).toBeInTheDocument();           //  Usa la propiedad del Componente

//     });

//     test( 'it should display the message "Hola, Eva Sofia Janeth! (Forma 2)', () => {
    
//         const 
//             name = 'Eva Sofia Janeth',
//             title = 'Hola, Eva Sofia Janeth!';
            
//         render( <App name={ name } /> );    //  Monta el Componente de React

//         expect( screen.getByText( title ) ).toBeInTheDocument();    //  Usa screen para hacer uso de la propiedad del componente

//     });

    describe( 'Enzyme:', () => {
        
        test( 'it should display the message "Hola, Eva Sofia Janeth!', () => {
            
            const 
                name = 'Eva Sofia Janeth', 
                wrapper = shallow( <App name={ name } /> );

            // console.log( wrapper.debug() );

            expect( wrapper ).toMatchSnapshot();    //  Verifica que un valor coincida con la instantánea (Snapshop) más reciente
            
        });

    }); 

});

