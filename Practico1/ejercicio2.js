 //Gestor de Contactos: Crea un objeto contactos que almacene una lista de objetos, donde cada objeto represente un contacto con propiedades como nombre, telefono y email. Luego, agrega un nuevo contacto a la lista y muestra en la consola la cantidad total de contactos.


// Objeto de gestión de contactos
const gestorContactos = {
    contactos: [],
    agregarContacto: function(nombre, telefono, email) {
      this.contactos.push({ nombre, telefono, email });
    },
    obtenerCantidadTotal: function() {
      return this.contactos.length;
    }
  };
  
  // Agregar nuevos contactos
  gestorContactos.agregarContacto("Juan Pérez", "123456789", "juan@example.com");
  gestorContactos.agregarContacto("María Rodríguez", "987654321", "maria@example.com");
  
  // Mostrar en la consola la cantidad total de contactos
  console.log("La cantidad total de contactos es:", gestorContactos.obtenerCantidadTotal());
  