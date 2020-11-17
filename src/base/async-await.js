export const getImageApiGiphy = async () => {

    try {
        const 
            apiKey = '6t2zjzJn3x3LILIFUpF6GKKcR95JTJhK',
            url = `http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`,
            response = await fetch( url ),
            { data } = await response.json(),
            $img = document.createElement( 'img' );

        return url;
    } 
    catch( error ) {
        console.error( error );    

        return 'URL no existe';
    }

}