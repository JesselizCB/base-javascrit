import superHeroes from "./data/heroes";

const getHeroes = (id) => superHeroes.find((hero) => hero.id === id);

console.log(getHeroes(3));

export const filterHeroesByOwners = (owner) =>
  superHeroes.filter((hero) => hero.owner === owner);

console.log(filterHeroesByOwners("Marvel"));
