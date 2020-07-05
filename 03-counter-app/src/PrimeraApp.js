import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ( { saludo, subtitulo } ) => {
    // const saludoObject = {
    //     nombre: 'Manuel',
    //     edad:   23,
    // };

    return (
        <>
            {/* <pre>{ JSON.stringify(saludoObject, null, 3) }</pre> */}
            <h1>{ saludo }</h1>
            <p>{ subtitulo }</p>
            <p>Mi primera aplicación</p>
        </>
    );
}

PrimeraApp.prototype = {
    saludo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string.isRequired,
};

PrimeraApp.defaultProps = {
    saludo: 'Hola, soy ???',
    subtitulo: 'Soy un subtitulo',
};

export default PrimeraApp;