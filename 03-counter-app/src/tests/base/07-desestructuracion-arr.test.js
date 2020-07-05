import '@testing-library/jest-dom';
import { retornaArreglo } from '../../base/07-desestructuracion-arr';

describe('Pruebase en 07-desestructuracion-arr-test.js', () => {
    test('retornaArreglo debe de retornar un string y un número', () => {
        const [letras, numeros] = retornaArreglo(); // ['ABC', 123]

        // expect(arr).toEqual(['ABC', 123]);

        expect(letras).toEqual('ABC');
        expect(typeof letras).toEqual('string');


        expect(numeros).toEqual(123);
        expect(typeof numeros).toEqual('number');
    });
});