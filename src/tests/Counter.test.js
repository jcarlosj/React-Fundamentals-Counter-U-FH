import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import Counter from '../Counter';

describe( '<Counter />', () => {
    
    describe( 'Enzime:', () => {
        
        test( 'should deploy the component correctly', () => {
           
            const wrapper = shallow( <Counter /> );

            // console.log( wrapper.debug() );

            expect( wrapper ).toMatchSnapshot();

        });

        test( 'should display the default value of 100 (as string)', () => {
            
            const 
                defaultValue = 100,
                wrapper = shallow( <Counter value={ defaultValue } /> ),
                h2Value = wrapper.find( 'h2' ).text().trim();       //  Encuentra un elemento h2 en el Componente

            // console.log( wrapper.debug() );

            expect( h2Value ).toBe( defaultValue.toString() );

        });
        

    });
    
});
