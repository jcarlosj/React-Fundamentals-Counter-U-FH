import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import Counter from '../Counter';

describe( 'Enzime:', () => {

    let wrapper;

    beforeEach( () => {
        wrapper = shallow( <Counter /> );   //  Ejecuta una función antes de que se ejecute cada una de las pruebas de este archivo
        // console.log( 'Counter' );
    });
    
    describe( '<Counter />', () => {

        test( 'should deploy the component correctly', () => {

            // console.log( wrapper.debug() );

            expect( wrapper ).toMatchSnapshot();

        });

        test( 'should display the default value of 100 (as string)', () => {
            
            const 
                defaultValue = 100,
                wrapper = shallow( <Counter value={ defaultValue } /> ),
                h2Value = wrapper.find( 'h2' ).text().trim();       //  Encuentra un elemento h2 en el Componente y extrae el texto contenido

            // console.log( wrapper.debug() );

            expect( h2Value ).toBe( defaultValue.toString() );

        });
        
        describe( 'Botones', () => {
           
            test( 'should increase the value when clicking +1', () => {
                
                const
                    currentValue = wrapper.find( 'h2' ).text().trim(), 
                    btnAddOne =  wrapper.find( 'button' ).at( 0 );    //  Obtengo el primer boton

                btnAddOne.simulate( 'click' );                          //  Simula un click sobre el boton

                const finalValue = wrapper.find( 'h2' ).text().trim();     //  Encuentra un elemento h2 en el Componente y extrae el texto contenido

                // console.log( btnAddOne.html(), currentValue, finalValue );

                expect( ( Number( currentValue ) + 1 ).toString() ).toBe( finalValue );

            });

            test( 'should increase the value when clicking -1', () => {
                
                const
                    currentValue = wrapper.find( 'h2' ).text().trim(), 
                    btnSubtractOne =  wrapper.find( 'button' ).at( 2 );    //  Obtengo el tercer boton

                btnSubtractOne.simulate( 'click' );                          //  Simula un click sobre el boton

                const finalValue = wrapper.find( 'h2' ).text().trim();     //  Encuentra un elemento h2 en el Componente y extrae el texto contenido

                // console.log( btnSubtractOne.html(), currentValue, finalValue );

                expect( ( Number( currentValue ) - 1 ).toString() ).toBe( finalValue );

            });

            test( 'should set the default value when clicking reset', () => {

                const 
                    clicks = 3,         //  Numero de clicks del boton +1
                    defaultValue = 9,
                    wrapper = shallow( <Counter value={ defaultValue } /> ),
                    currentValue = wrapper.find( 'h2' ).text().trim();
                    
                //  Clicks de incremento
                for( let i = 0; i < clicks; i ++ ) {
                    wrapper.find( 'button' ).at( 0 ).simulate( 'click' );   //  Simula un click sobre el boton
                }

                //  Click de restablecer valor por defecto
                wrapper.find( 'button' ).at( 1 ).simulate( 'click' );       //  Simula un click sobre el boton

                const finalValue = wrapper.find( 'h2' ).text().trim();      //  Encuentra un elemento h2 en el Componente y extrae el texto contenido

                // console.log( currentValue, finalValue );

                expect( finalValue ).toBe( currentValue );

            });
            
        });
        
    });
    
});
