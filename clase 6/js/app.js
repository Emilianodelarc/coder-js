// comillas invertidas - arrow functions

let nombre = 'Lucía';
let edad = 25;
let estudio = "JavaScript";

// console.log(`<p>Nore: ${nombre}</p>
//              <p>Edad: ${edad}</p>
//             <p>Etudiando: ${estudio}</p>`)

// ARROW FUNCTIONS

// function saludar() {
//     console.log("Hola mundo")
// }

let saludar = (saludo) => {
    console.log(saludo)
}

let numeros = [1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 7, 8, 9, 10]
// numeros.splice(numeros.indexOf(6), 1)
// numeros = numeros.filter((el) => el != 6)
// console.log(numeros)


// slice - (no modifica el array)

// console.log(numeros.slice(6))


// push, pop, unshift, shift - transforman el array original
numeros.push(11)   // push agrega elemento al final del array

numeros.pop() // pop remueve el último elemento del array

numeros.unshift(0) // agrega elementos al inicio del array

numeros.shift() // elimina elemento al principio del array


// splice - modifica el array original
// (indice inicial, cantidad de elementos a eliminar, +elementos añadir)

// numeros.splice(4, 0, "Hola", "Que tal", 99987)

// indexOf()

function borrarElemento(numeros, elemento){
    if (numeros.indexOf(elemento) == -1) {
        console.log("El elemento no existe en el array")
    } else {
        numeros.splice(numeros.indexOf(elemento), 1)
    }
}

// borrarElemento(numeros, 12)

// numeros = numeros.slice(0, numeros.indexOf(6)).concat(numeros.slice(numeros.indexOf(6)+1))

// console.log(numeros)

for (let i = 0; i < numeros.length; i++) {
    // console.log(numeros[i])
}


// filter

// reduce

function Mascota(nombre, tipo, edad) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.edad = edad
}

let mascotas = []

mascotas.push(new Mascota("Pepe", "Perro", 8))
mascotas.push(new Mascota("Julian", "Perro", 4))
mascotas.push(new Mascota("Fluffy", "Gato", 2))
mascotas.push(new Mascota("Pelusa", "Gato", 12))
mascotas.push(new Mascota("Nemo", "Pez", 1))

// for (let i = 0; i < mascotas.length; i++) {
//     console.log(mascotas[i])
// }

// for (let mascota of mascotas) {
//     console.log(mascota.edad)
// }


// mascotas.forEach((el) => console.log(el))

// mascotas.forEach(mascota => console.log(mascota.edad))

// console.log(mascotas)


const arrayProductos = [
    {nombre: "Remera", precio: 1000},
    {nombre: "Remera", precio: 2000},
    {nombre: "Pantalon", precio: 1500},
    {nombre: "Pantalon", precio: 1700},
    {nombre: "Pantalon", precio: 5000},
    {nombre: "Pantalon", precio: 3000},
    {nombre: "Calzado", precio: 7000},
    {nombre: "Calzado", precio: 8000},
    {nombre: "Calzado", precio: 13000},
    {nombre: "Buzo", precio: 6000},
    {nombre: "Buzo", precio: 19000},
    {nombre: "Buzo", precio: 800},
]


// arrayProductos.forEach((el) => {
//     console.log(el.nombre)
// })

// FILTER - misma longitud o menos, acorde a una condición

console.log(arrayProductos.filter((el) => el.nombre != "Calzado").filter((el) => el.nombre != "Pantalon"))

// // MAP - misma longitud, propiedades pedidas

// console.log(arrayProductos.map((el) => el.nombre))


// REDUCE (), sirve para sumar X propiedad de un elemento.
function sumar(array) {
    sumaTotal = 0
    for (let el of array) {
        sumaTotal += el.precio;
    }
    return sumaTotal
}

console.log(sumar(arrayProductos))

console.log(arrayProductos.reduce((acc, el) => acc + el.precio, 0))

