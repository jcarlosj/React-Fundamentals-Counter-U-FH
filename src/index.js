import React from 'react';
import ReactDOM from 'react-dom';

const 
    saludo = <h1>Hola Mundo desde React!</h1>,
    divRoot = document.querySelector( '#root' );

ReactDOM.render( saludo, divRoot );     //  ReactDOM: Inserta el elemento dentro del elemento referenciado en el DOM 
                                        //            Además permite crear a partir de aqui el árbol de componentes de la aplicacion
                                        //            permitiendo que puedan comunicarse unos con los otros

