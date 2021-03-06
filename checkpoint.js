
// Funciones

function menorMayor(numeros) {
  // Escribi una función llamada menorMayor que tome como entrada un arreglo de números y devuelva un arreglo 
  // que contenga el menor número del arreglo en la posición cero y el mayor número del arreglo en la posición 1.
  // Ej: menorMayor([4, 6, 1, 7, 15]) // retorna [1, 15]
  let menor = numeros[0];
  let mayor = numeros[0];
  let h = [];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menor)
      menor = numeros[i];
    if (numeros[i] > mayor)
      mayor = numeros[i];
  };
  h[0] = menor;
  h[1] = mayor;
  return h;
};

function stringMasLarga(strings) {
  // Escribe una función llamada stringMasLarga, que tome un arreglo de strings llamado 'strings'
  // tu función debe retornar el string más largo que hay en el arreglo
  // Ej:
  // stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']); // returns 'guten tag'
  // stringMasLarga(['JavaScript', 'HTML', 'CSS']); // returns 'JavaScript'
  let largo = strings[0];
  for (let i = 1; i < strings.length; i++) {
    if ((strings[i].length) > (largo.length))
      largo = strings[i];
  };
  return largo;
};

function buscarAmigo(amigos, nombre) {
  // Escribe una obj que reciba un array de amigos (objetos) y un nombre (string).
  // Tu función debe devolver el amigo que coincida con el nombre recibido por argumento.
  // Cada amigo tiene las propiedades nombre y edad.
  // Ej:
  //  let amigos = [{ nombre: 'toni', edad: 33 } , { nombre: 'Emi', edad: 25 }];
  //  buscarAmigo(amigos, 'toni') // retorna { nombre: 'toni', edad: 33 };
  for (let i = 0; i < amigos.length; i++) {
    if (amigos[i].nombre === nombre)
      return amigos[i];
  };
};

function sumArray(array, n) {
  // Escribir un algoritmo que, dada un arreglo de números ordenados y un número n, 
  // te devuelva true si alguna combinación de dos números cualesquiera suman n, y devuelva false si ninguna combinación
  // de dos números sumados da como resultado el número n.
  // Ej:
  // sumArray([2,5,7,10,11,15,20], 13)  // retorna true     2+11 suman 13
  // sumArray([2,5,7,10,11,15,20], 14)  // retorna false
  // pista: podes usar bucles anidados;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if ((array[i] + array[j]) === n)
        return true;
    }
  }
  return false;
};

function pluck(array, propiedad) {
  // Escribi una función llamada pluck,
  // que recibe un array de objetos (array) y el nombre de una propiedad (propiedad).
  // La función va a devolver un nuevo arreglo con solo los
  // valores dentro de la propiedad recibida, por ejemplo:
  // let productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]
  // productos.pluck(productos, 'name') // ['TV LCD', 'Computadora']
  // pista: es una buena oportunidad para usar map.
  /*let nuevoArray = array.map(function(current){
  return  propiedad;
  });
  return nuevoArray;*/
  let nuevoArray = [];
  for (let i = 0; i < array.length; i++)
    nuevoArray[i] = array[i][propiedad];
  return nuevoArray;
}

// =======================================================================


function crearClasePersona() {
  // Crear una clase para construir objeto de tipo Persona.
  // el constructor debe recibir:
  // nombre (string) , edad (integer) , hobbies (array de strings) , amigos (array de objetos)
  // Esta obj debe retonar la clase Persona.
  class Persona {
    constructor(nombre, edad, hobbies, amigos) {
      this.nombre = nombre;
      this.edad = edad;
      this.hobbies = hobbies;
      this.amigos = amigos;
    }
    addFriend(nombre, edad) {
      // el metodo addFriend recibe un string nombre y un entero edad y debe agregar un objeto:
      // { nombre: nombre, edad: edad} al arreglo de amigos de la persona.
      // no debe retornar nada.
      this.amigos.push({ edad, nombre });
    }
    addHobby(hobby) {
      // este método debe agregar un hobby (hobby) al arreglo de hobbies de la persona.
      // no debe retornar nada.
      this.hobbies.push(hobby);
    }
    getFriends() {
      // Escribe una función que retorne un arreglo con sólo los nombres del arreglo de amigos
      // de la persona.
      // Ej:
      // persona.getFriends() // retorna ['toni', 'Leo', 'Manu']
      let amigos = [];
      for (let i = 0; i < this.amigos.length; i++)
        amigos[i] = this.amigos[i].nombre;
      return amigos;
    }
    getHobbies() {
      // Escribe una función que retorne un arreglo con los hobbies de la persona
      // Ej:
      // persona.getHobbies() // retorna ['correr', 'dormir', 'nadar']
      let h = [];
      for (let i = 0; i < this.hobbies.length; i++)
        h[i] = this.hobbies[i];
      return h;
    }
    getPromedioEdad() {
      // Escribe una función que retorne el promedio de edad de los amigos de una persona
      // ej, si la persona tuviera estos amigos:
      // {
      //   amigos: [{
      //     nombre: 'toni',
      //     edad: 33,
      //   }, {
      //     nombre: 'Emi',
      //     edad: 25
      //   }]
      // }
      // persona.getPromedioEdad() // retorna 29
      let suma = 0;
      for (let i = 0; i < this.amigos.length; i++) {
        suma = suma + this.amigos[i].edad;
      }
      return suma / this.amigos.length;
    }
  };
  return Persona;
}
/* ====================== EXTRA CREDIT ===================== */
// Este ejercicio no cuenta en el puntaje del checkpoint
// pero si llegas hasta aca y lo haces quiere decir que venis super bien!
function filtrar(obj) {
  // Escribi una función filtrar en el prototipo de Arrays,
  // que recibe una obj (callback) que devuelve true o false.
  // filtrar los elementos de ese arreglo en base al resultado de esa obj
  // comparadora, devolver un nuevo arreglo con los elementos filtrados.
  // NO USAR LA FUNCION FILTER DE LOS ARREGLOS.
  // ej:
  // let productos = [{
  //   price: 100,
  //   name: 'tv'
  // }, {
  //   price: 50,
  //   name: 'phone'
  // }, {
  //   price: 30,
  //   name: 'lamp'
  // }]
  // productos.filtrar(function(p) {
  //   return p.price >= 50;
  // }) => [{price: 100, name:'tv'}]
  Array.prototype.filtrar = function (obj) {
    let nuevoArray = [];
    for (let i = 0; i < this.length; i++) {
      if (obj(this[i])) {
        nuevoArray.push(this[i]);
      }
    }
    return nuevoArray;
  }
};
// No modifiques nada debajo de esta linea
// 
module.exports = {
  sumArray,
  menorMayor,
  stringMasLarga,
  buscarAmigo,
  pluck,
  crearClasePersona,
  filtrar
};