import React, { useState } from 'react';
import PropTypes from 'prop-types'

/** Functional Component */
const Counter = ({ value }) => {

    const [ counter, setCounter ] = useState( 0 );

    const handleAdd = ( event ) => {
        setCounter( counter + 1 );      //  Otra Forma: setCounter( counter => counter + 1 ); 
    }

    return ( 
        <> 
            <h1>Counter</h1>
            <h2>{ counter }</h2>

            <button
                onClick={ handleAdd }
            >+ 1</button>
        </>
    );
}
 
Counter.propTypes = {
    value: PropTypes.number
}

export default Counter;

