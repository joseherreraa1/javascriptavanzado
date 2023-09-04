//Crea un objeto usuario con propiedades como nombre y peliculasFavoritas, que es un array de objetos donde cada objeto representa una película con propiedades como titulo y año. Agrega al menos tres películas favoritas y muestra en la consola el título de la segunda película favorita.

const pelicula1 = { titulo: "Avatar", año: 2009 };
const pelicula2 = { titulo: "Spider-Man", año: 2002 };
const pelicula3 = { titulo: "Titanic", año: 1997 };

const usuario = {
    nombre: "Pedro",
    peliculasFavoritas: [pelicula1, pelicula2, pelicula3]
};

const segundoTitulo = usuario.peliculasFavoritas[1].titulo;

console.log("El título de la segunda película favorita es:", segundoTitulo);
