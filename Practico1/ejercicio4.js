//Crea un objeto clase que contenga un array de objetos, donde cada objeto represente un estudiante con propiedades como nombre y calificaciones, que es un array de números. Agrega al menos tres estudiantes y muestra en la consola el promedio de calificaciones de cada estudiante.


// Definir la clase Estudiante
class Estudiante {
    constructor(nombre, calificaciones) {
      this.nombre = nombre;
      this.calificaciones = calificaciones;
    }
  
    calcularPromedio() {
      const sumaCalificaciones = this.calificaciones.reduce((total, calificacion) => total + calificacion, 0);
      const promedio = sumaCalificaciones / this.calificaciones.length;
      return promedio;
    }
  }
  
  // Crear instancias de la clase Estudiante
  const estudiante1 = new Estudiante("Estudiante 1", [85, 90, 78]);
  const estudiante2 = new Estudiante("Estudiante 2", [92, 88, 96]);
  const estudiante3 = new Estudiante("Estudiante 3", [75, 80, 68]);
  
  // Almacenar los estudiantes en un array
  const estudiantes = [estudiante1, estudiante2, estudiante3];
  
  // Mostrar el promedio de calificaciones de cada estudiante
  estudiantes.forEach((estudiante, index) => {
    const promedio = estudiante.calcularPromedio();
    console.log(`Estudiante ${index + 1}: ${estudiante.nombre}`);
    console.log(`Promedio de Calificaciones: ${promedio.toFixed(2)}`);

  });
  console.log("------------------------");
  