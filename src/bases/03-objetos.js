
const persona = {
  nombre: "Tony",
  apellido: "Peña",
  edad: 30,
  direccion: {
    ciudad: "Abancay",
    lat: 643648736,
    lng: 86483643986,
  },
};

const persona2 = { ...persona };
console.log(persona2);
persona2.nombre = "Peter";
console.log(persona2.nombre);




