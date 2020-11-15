import React from 'react';

/** Functional Component */
const App = ({ name }) => {

    if( ! name ) {
        throw new Error( 'El saludo es necesario' );
    }

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
 
export default App;