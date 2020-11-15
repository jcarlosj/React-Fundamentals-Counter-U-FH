import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './Counter';

import './index.css';

const divRoot = document.querySelector( '#root' );

ReactDOM.render( <Counter value={ 3.1415 } />, divRoot );     //  ReactDOM: Inserta el elemento dentro del elemento referenciado en el DOM 
                                        //            Además permite crear a partir de aqui el árbol de componentes de la aplicacion
                                        //            permitiendo que puedan comunicarse unos con los otros

