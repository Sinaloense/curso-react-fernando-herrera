import '@testing-library/jest-dom';
import { getHeroesById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Héroes', () => {
    test('getHeroesById debe de retornar un héroe por id', () => {
        const id = 1;
        const heroe = getHeroesById(id);
        
        const heroeData = heroes.find(h => heroe.id);

        expect(heroe).toEqual(heroeData);
    });

    test('getHeroesById debe de retornar undefined si héroe no existe', () => {
        const id = 10;
        const heroe = getHeroesById(id);

        expect(heroe).toBe(undefined);
    });

    test('getHeroesByOwner debe de retornar un arreglo con los héroes de DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        const heroesData = heroes.filter(h => h.owner === owner);

        expect(heroes).toEqual(heroesData);
    });

    test('getHeroesByOwner debe de retornar un arreglo con los héroes de Marvel lenght = 2', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        // expect(heroes.length).toBe(2);
        expect(heroes).toHaveLength(2);
    })
    
});