import React from 'react';

/** Functional Component */
const App = () => {

    const 
        title = 'Hola Mundo desde React!',
        message = 'Usamos un Fragment para agrupar elementos HTML y poder retornarlos como uno solo';

    return (
        <> 
            <h1>{ title }</h1>
            <p>{ message }</p> 
        </>
    );
}
 
export default App;