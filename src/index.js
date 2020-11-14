//  Fetch API
const 
    apiKey = '6t2zjzJn3x3LILIFUpF6GKKcR95JTJhK',
    url = `http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`;

const httpRequest = fetch( url );

httpRequest                                 //  -> Retorna una Promesa
    .then( response => response.json() )    //  -> Retorna una Promesa
    .then( data => {
        console.log( data );                //  -> Retorna los datos
    })
    .catch( console.warn );
