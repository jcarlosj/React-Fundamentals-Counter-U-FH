//  Async
const 
    apiKey = '6t2zjzJn3x3LILIFUpF6GKKcR95JTJhK',
    url = `http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`;

const getImage = async () => fetch( url ) ? fetch( url ) : 'No hay url disponible';    //  -> Retorna una Promesa > Implementa return implicito abreviado

getImage()                                  //  -> Retorna una Promesa
    .then( response => response.json() )    //  -> Retorna una Promesa
    .then( ({ data }) => {
        const { original: { url } } = data.images;                //  -> Retorna los datos

        console.log( url );
        if( ! url ) return 'No hay URL';
        
        return url;
    })
    .then( url => {
        const $img = document.createElement( 'img' );

        $img.src = url;
        document.body.append( $img );
    })
    .catch( console.warn );
