import React from 'react';
import PropTypes from 'prop-types'

/** Functional Component */
const App = ({ name }) => {

    const data = {
        name,
        title: `Hola ${ name } desde React!`,
        message: 'Usamos un Fragment para agrupar elementos HTML y poder retornarlos como uno solo'
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
    name: PropTypes.string.isRequired
}
 
export default App;