//  Async/Await
const 
    apiKey = '6t2zjzJn3x3LILIFUpF6GKKcR95JTJhK',
    URL = `http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`;

const getImage = async () => {                  
    const 
        response = await fetch( URL ),          //  -> Retorna una Promesa
        { data } = await response.json(),       //  -> Retorna una Promesa
        { original: { url } } = data.images;

    console.log( url );
    if( ! url ) return;
    
    const $img = document.createElement( 'img' );

    $img.src = url;
    document.body.append( $img );
}    

getImage();
