        //Crea un objeto producto con propiedades como nombre, precio y disponible. Luego, crea una función llamada mostrarProducto que tome un objeto producto como argumento y muestre en la consola toda la información del producto.


        // Crear un objeto producto
const producto = {
        nombre: "Celular",
        precio: 20,
        disponible: true
      };
      
      // Crear una función para mostrar la información del producto
      function mostrarProducto(producto) {
        console.log("Nombre del producto: " + producto.nombre);
        console.log("Precio del producto: $" + producto.precio);
        console.log("Disponible: " + (producto.disponible ? "Sí" : "No"));
      }
      
      // Llamar a la función mostrarProducto con el objeto producto como argumento
      mostrarProducto(producto);
      console.log("------------------------");
      