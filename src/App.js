import React from 'react';
import PropTypes from 'prop-types'

/** Functional Component */
const App = ({ name, message }) => {

    const data = {
        name,
        title: `Hola, ${ name }!`,
        message
    };

    console.log( name );

    return (
        <> 
            <h1>{ data.title }</h1>
            <p>{ data.message }</p> 
            <pre>{ JSON.stringify( data, null, 4 ) }</pre>
        </>
    );
}

App.propTypes = {
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
}
 
export default App;