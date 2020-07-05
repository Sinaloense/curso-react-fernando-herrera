import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas en 05-funciones.test.js', () => {
    test('getUser debe de retornar un objeto', () => {
        const userTest = {
            uid:        'ABC123',
            username:   'El_Papi1502',
        };

        const user = getUser();
        
        expect(user).toEqual(userTest);
    });

    test('getAUserActivo debe retonar un objeto', () => {
        const nombre = 'Manuel';

        const usuarioActivo = getUsuarioActivo(nombre);

        expect(usuarioActivo).toEqual({
            uid:        'ABC567',
            username:   nombre,
        });
    })
    
});