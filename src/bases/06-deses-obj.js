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

// console.log(persona.nombre);
const { nombre, apellido, edad } = persona;
console.log(nombre, apellido, edad);
