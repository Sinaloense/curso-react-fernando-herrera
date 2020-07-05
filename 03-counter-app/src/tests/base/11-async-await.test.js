import '@testing-library/jest-dom';
import { getImagen } from '../../base/11-async-await';

describe('getImagen Pruebas con async-await y Fetch', () => {
    test('debe de retornar el url de la imagen', async (done) => {
        const url = await getImagen();
        console.log(url);

        expect(url.includes('https://')).toBe(true);
        done();
    });
})
