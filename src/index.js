//  Objetos Literales
const supersona = {
    nombreCompleto: {
        original: 'Kal-El',
        terrestre: 'Clark Joseph Kent'
    },
    raza: 'Kriptoniano',
    ocupaciones: [ 'Superhéroe', 'Reportero', 'Granjero' ],
    padres: {
        kriptonianos: {
            padre: 'Jor-El',
            madre: 'Lara Lor-Van'
        },
        terricolas: {
            padre: 'Jonathan Kent',
            madre: 'Martha Kent'
        }
    },
    familiares: {
        kriptonianos: {
            tio: 'Zor-El',
            tia: 'Alura In-Ze',
            prima: 'Kara Zor-El',
            clone: {
                genetico: 'Kon-El',
                cibernetico: 'Bizarro'
            }
        }
    }
};

// console.table( supersona );
console.log( { supersona } );

const 
    persona = supersona,                //  Asignacion por referencia (Son el mismo objeto, es decir hay mutacion)
    supersonita = { ...supersona };     //  Clona el objeto usando el Spread (Ahora son dos objetos diferentes, es decir no hay mutacion)


persona.raza = 'terricola';             //  Muta el objeto literal original supersona
supersonita.raza = 'valluno';           //  Un objeto nuevo no muta

console.log( persona );         //  persona es el mismo objeto de supersonita
console.log( supersonita );     //  supersonita es un objeto nuevo