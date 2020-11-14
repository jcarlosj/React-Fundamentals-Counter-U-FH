//  Promises (Promesas)
const promesa = new Promise( ( resolve, reject ) => {
    const seg = 2;

    setTimeout( () => {
        resolve( seg + ' segundos despues' );
    }, seg * 1000 );

});

promesa 
    .then( data => {
        console .log( data );
    })
    .catch()
    .finally();