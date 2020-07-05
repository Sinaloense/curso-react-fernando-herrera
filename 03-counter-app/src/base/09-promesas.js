import { getHeroesById } from "./08-imp-exp";


export const getHeroeByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroesById(id);

            if(heroe !== undefined) {
                resolve(heroe);
            }
            else {
                reject('No se pudo encontrar el héroe');
            }
        }, 1500);
    });
}