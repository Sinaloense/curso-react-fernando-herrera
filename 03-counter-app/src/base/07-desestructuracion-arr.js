// Desestructuracion de arreglos
// Asignación Desestructurante de arreglos
const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ , , p3] = personajes;

//

export const retornaArreglo = () => {
    return ['ABC', 123];
}

// const [letras, numeros] = retornaArreglo();

//
const useState = (valor) => {
    return [valor, () => {
        console.log('Hola Mundo')
    }];
}