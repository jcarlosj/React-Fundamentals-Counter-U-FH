import React, { useState } from 'react';
import PropTypes from 'prop-types'

/** Functional Component */
const Counter = ({ value }) => {

    const [ counter, setCounter ] = useState( value );

    const handleAction = ( action ) => {

        if( action === 'add' ) setCounter( counter + 1 );      
        else if( action === 'subtract' ) setCounter( counter - 1 ); 
        else setCounter( value );

    }

    return ( 
        <> 
            <h1>Counter</h1>
            <h2>{ counter }</h2>

            <button
                onClick={ () => handleAction( 'add' ) }
            >+ 1</button>
            <button
                onClick={ () => handleAction( 'reset' ) }
            >Reset </button>
            <button
                onClick={ () => handleAction( 'subtract' ) }
            >- 1</button>
        </>
    );
}
 
Counter.propTypes = {
    value: PropTypes.number
}

Counter.defaultProps = {
    value: 0
}

export default Counter;

