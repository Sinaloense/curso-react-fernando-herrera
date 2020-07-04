import heroes, { owners } from '../data/heroes';

console.log(owners);

// Find (regresa el primer valor que coincida con el parametro ingresado)

const getHeroesById = (id) => heroes.find((heroe) => heroe.id === id);
console.log(getHeroesById(2));

// Filter (regresa todos los valores que coincidan con el parametro ingresado)

const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);
console.log(getHeroesByOwner('Marvel'));