import React from 'react';
import PropTypes from 'prop-types'

/** Functional Component */
const Counter = ({ value }) => {

    

    const handleAdd = ( event ) => {
        console.log( event );
    }

    return ( 
        <> 
            <h1>Counter</h1>
            <h2>{ value }</h2>

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

