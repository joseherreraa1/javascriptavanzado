//Crea un objeto perfil que almacene propiedades como nombre, edad y amigos, que es un array de objetos donde cada objeto representa un amigo con propiedades como nombre y edad. Agrega al menos tres amigos y muestra en la consola el nombre del amigo más joven.


// Definir un objeto perfil con propiedades nombre, edad y amigos
const perfil = {
    nombre: "Jose",
    edad: 30,
    amigos: [
      { nombre: "Juan", edad: 22 },
      { nombre: "Pedro", edad: 27 },
      { nombre: "Agustin", edad: 20 }
    ]
  };
  
  // Encontrar el amigo más joven
  let amigoMasJoven = perfil.amigos[0];
  
  perfil.amigos.forEach((amigo) => {
    if (amigo.edad < amigoMasJoven.edad) {
      amigoMasJoven = amigo;
    }
  });
  
  // Mostrar el nombre del amigo más joven en la consola
  console.log("El amigo más joven es:", amigoMasJoven.nombre);
  