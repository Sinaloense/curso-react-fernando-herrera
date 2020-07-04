const { getHeroesById } = require("./08-imp-exp");

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroesById(2);
//         resolve(heroe);
//         // reject('No se pudo encontrar el héroe');
//     }, 2000);
// });

// promesa.then((heroe) => {
//     console.log('heroe', heroe);
// })
// .catch(err => console.warn(err));

const getHeroeByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroesById(id);

            if(heroe !== undefined) {
                resolve(heroe);
            }
            else {
                reject('No se pudo encontrar el héroe');
            }
        }, 2000);
    });
}

getHeroeByIdAsync(3)
    // .then(heroe => console.log('Heroe', heroe))
    .then(console.log)
    // .catch(err => console.warn(err));
    .catch(console.warn);