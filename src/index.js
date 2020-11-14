//  Destructuracion de Objetos (o Asignación desestructurante)
const persona = {
    name: 'Juan Carlos',
    profession: 'Software Developer',
    age: 42,
    coordinates: {
        lat: 4.7392523,
        lng: -74.0360119
    }
};

const { name, age: edad, coordinates: { lat, lng } } = persona;
console.log( name, edad, lat, lng );        //  --> Asignacion destructurante


//  Destructurando el argumento de una funcion
const getData = ({ profession, type = 'Junior' }) => {         //  Destructuramos solo la propiedad que nos interesa obtener
    return { 
        profession,
        type
    };
}

const { profession: profesion, type } = getData( persona );      //  Pasamos el objeto 
console.log( type, profesion );

