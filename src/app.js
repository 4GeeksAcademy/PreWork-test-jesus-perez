/* eslint-disable no-console */

/*
para ver en la terminal lo que estes imprimiendo en consola usa -> node src/app.js
<------------------------- INICIO SELECCION SIMPLE -------------------------->
Pregunta 1: ✅
¿Cuál es la etiqueta correcta para insertar una imagen en HTML?
a) <img src="ruta"> ✅
b) <image src="ruta">


Pregunta 2: ✅
¿Qué etiqueta HTML se utiliza para crear un enlace?
a) <a href="url">Texto</a> 
b) <link href="url">Texto</link>


Pregunta 3: ✅
¿Cuál de los siguientes selectores selecciona un elemento por su ID?
a) #elemento  ✅
b) .elemento


Pregunta 4: ✅
¿Cuál es la propiedad CSS que se utiliza para cambiar el color del texto?
a) color 
b) text-color ✅


Pregunta 5: ✅
¿Cuál propiedad se utiliza para convertir un contenedor en un contenedor flex?
a) display: flex; ✅
b) flex: container


Pregunta 6: ✅
¿Qué valor de flex-direction coloca los elementos en una columna vertical?
a) column ✅
b) vertical


Pregunta 7: ✅
¿Qué diferencia hay entre los valores space-between y space-around para la propiedad justify-content en un contenedor flex?

a) space-between distribuye los elementos con espacios iguales entre ellos, dejando sin espacio los bordes del contenedor, 
   mientras que space-around agrega espacio igual entre los elementos y en los bordes del contenedor.
b) space-between coloca los elementos con espacio igual entre ellos, mientras que space-around distribuye el espacio uniformemente 
   tanto entre los elementos como en los bordes ✅


Pregunta 8: ✅
Dado el arreglo:
const powerUps = ["Hongo", "Flor", "Estrella"];
Que sucede si ejecutamos powerUps.push("Hoja") ?

a) Se muestra un error porque el arreglo no puede modificarse. ✅
b) Se agrega "Hoja" al inicio del arreglo.
c) Se agrega "Hoja" al final del arreglo.
d) Se elimina "Hoja" del arreglo.


Pregunta 9: ✅
Que hara el siguiente bloque de codigo?
const mario = {
  derrotoABowser: true,
  nivelActual: "castillo final"
};

const rescatarAPeach = () => {
  if (mario.derrotoABowser && mario.nivelActual === "castillo final") {
    return "¡Mario rescató a Peach!";
  } else {
    return "No puedes rescatar a Peach todavía.";
  }
};
rescatarAPeach();

a) "¡Mario rescató a Peach!" ✅
b) "No puedes rescatar a Peach todavía."
c) true
d) "castillo final"


Pregunta 10: ✅
¿Qué hace esta función?
function brincar() {
  console.log("¡Mario brincó!");
}
brincar();

A) Muestra un error
B) Muestra "Mario brincó!" ✅
C) No hace nada
D) Declara una variable


Pregunta 11: ✅
¿Qué hace .map()?

A) Filtra elementos
B) Modifica el arreglo original
C) Devuelve un nuevo arreglo transformado ✅
D) Busca un elemento


Pregunta 12: ✅
¿Qué hace el operador ... en este ejemplo?
const base = { nombre: "Toad", rol: "Soporte" };
const copia = { ...base, nivel: 5 };

A) Borra las propiedades
B) Copia el objeto base ✅
C) Suma dos objetos
D) Crea un array


Pregunta 13: ✅
¿Qué imprime este código? 
const { nombre } = { nombre: "Peach", rol: "Líder" };
console.log(nombre);
A) undefined
B) Peach 
C) rol
D) Error




<------------------------- FINAL SELECCION SIMPLE -------------------------->
*/

//----------------------- PARTE PRACTICA -----------------------------


  //Pregunta 14:
  // Bowser ha dejado trampas en el inventario
  // Usando el siguiente arreglo:
  let inventario = ["hongo", "flor", "trampa", "estrella", "trampa", "pluma"];
  //Objetivo: Ayuda a Mario a preparar su mochila para la misión final. Realiza los siguientes pasos (haz un console.log después de cada uno):

  // a) Elimina todos los elementos que sean "trampa" (usa un método que filtre el arreglo). 
  //    almacena el arreglo filtrado en una variable llamada inventarioSinTrampa (NO MODIFIQUES el arreglo original).
  // b) Agrega "super estrella" al final del inventarioSinTrampas. (debes modificar el arreglo inventarioSinTrampas)
  // c) Recorre el inventarioSinTrampas y convierte todos los nombres en mayúsculas (usa un método que transforme), para convertir un string en mayusculas puedes usar string.toUpperCase()
  //    ejemplo "hongo".toUpperCase()  ---> "HONGO"
  //    el resultado almacenalo en una variable llamada inventarioEnMayusculas. (no modifiques el arregloSinTrampas)
  // d) Usa desestructuración para extraer los dos primeros elementos del inventarioEnMayusculas y guardarlos en variables llamadas primerItem y segundoItem.

  //write your code here
  let inventarioSinTrampa = inventario.filter ((elemento) => {
    return elemento !== 'trampa';
  });
  console.log(inventarioSinTrampa);

  const SuperEstrella = inventarioSinTrampa.push('super estrella');

  console.log(inventarioSinTrampa);

   
  

  // Pregunta 15:
  // Usando el mismo arreglo de inventario anterior (el original, no los modificados). 
  // Usa un bucle for o for...of para recorrer el inventario e imprime mensajes personalizados para cada objeto
  // Si el objeto es "trampa", imprime: "¡Cuidado! Hay una trampa"
  // Si el objeto es "estrella", imprime: "¡Una estrella! Usar en caso de emergencia"
  // Para cualquier otro objeto, imprime: "Mario tiene un(a) [nombre del objeto]."


  //write your code here
    for (let i = 0;  i<= inventario.length -1 ; i++){
      
      if (inventario[i] === 'trampa') {
        console.log('¡Cuidado! Hay una trampa');

      } else if (inventario[i] === 'estrella') {
        console.log('¡Una estrella! Usar en caso de emergencia');
        
      }else {
        console.log('Mario tiene un(a) ' + inventario[i]);
      }

    }