import '@testing-library/jest-dom';

const { getSaludo } = require("../../base/02-template-string");

describe('Pruebas en 02-template-string.test.js', () => {
    test('getSaludo debe de retornar Hola Manuel!', () => {
        const nombre = 'Manuel';
        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre + '!');
    });
    
    test('getSaludo debe de retornar Hola Carlos!, si no hay argumento nombre', () => {
        const saludo = getSaludo();

        expect(saludo).toBe('Hola Carlos!');
    })
    
});
