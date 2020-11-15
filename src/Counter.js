import React from 'react';
import PropTypes from 'prop-types'

/** Functional Component */
const Counter = ({ value }) => {
    return ( 
        <> 
            <h1>Counter</h1>
            <h2>{ value }</h2>
        </>
    );
}
 
Counter.propTypes = {
    value: PropTypes.number
}

export default Counter;

