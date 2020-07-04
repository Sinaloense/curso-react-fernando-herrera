// Desestructuracion de objectos
// Asignación Desestructurante de objectos
const persona  = {
    nombre:     'Tony',
    edad:       45,
    clave:      'Ironman',
    rango:      'Soldado',
};

// const { nombre, edad, clave, } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const useContext = ({nombre, edad, clave, rango = 'Capitan'}) => {
    // console.log(nombre, edad, rango);

    return {
        nombreClave:    nombre,
        anios:          edad,
        latLng:         {
                lat:    14.1232,
                lng:    -12.3232
        }
    }
}

const {nombreClave, anios, latLng: {lat, lng}} = useContext(persona);
console.log(nombreClave, anios);
console.log(lat, lng);