/* Pedir nombre mediante prompt y mostrarlo en consola junto con algún texto de saludo. 
Ejemplo:  ¡Hola, Juan!
Pedir un número mediante prompt, parsearlo, sumarlo a otro que se encuentre almacenado en una variable y luego mostrar el resultado en consola.
Pedir un texto mediante prompt, luego otro, concatenarlos y mostrarlo en un alerta.
*/ 

/*let ingreseSuNombre = prompt("Ingresar su nombre");
let salida  =  "Hola " + ingreseSuNombre;
console.log(salida);

let ano = 2023;
let edad = prompt("Ingrese su edad");
let anoDeNacimiento =  ano - edad;
console.log(anoDeNacimiento);
*/
let ingresoNombre = prompt("Ingrese su nombre");
let ingresoApellido = prompt("Ingrese su apellido");
let juntos = "Hola " + ingresoNombre + " " + ingresoApellido + "!";
alert(juntos)