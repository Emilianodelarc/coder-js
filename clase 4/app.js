// SCOPE - SALUDAR
let saludo = "Buen día Coders!";

function saludar() {
    let saludo = "Hola Mundo!";
    console.log(saludo);
}

function saludarDeNuevo(saludo) {
    console.log(saludo)
}

saludar();
saludarDeNuevo(saludo);

const musica = "metallica";

if (musica) { 
    let musica = "losredondos"
    console.log(musica)
}
console.log(musica)



// SUMA - RANGO


function sum(a, b) {
    return a + b
}
console.log(sum("Hola ", "Mundo"))

// Sumar un rango: inicio - final.
// Sume todos los valores entre el incio y el final

// 1 - 5
// 1 + 2 + 3 + 4 + 5 = 15

function sumarRango(inicio, final) {
    let suma = 0;

    if (inicio <= final) {
        for (inicio; inicio <= final; inicio++) {
            console.log(inicio)
            suma += inicio
        }
    } else {
        for (inicio; inicio >= final; inicio--) {
            console.log(inicio)
            suma = sum(suma, inicio)
        }
    }
    return suma
}

console.log(sumarRango(10, 15))


// PRESTAMO

// Pasar el nombre del banco, monto:
// funcion prestamo("Macro", 100000) = 130000
// funcion prestamo("Santander", 100000) = 120000

function calcularPrestamo(banco, monto) {
    let interes;

    // forma con IF
    // if (banco === "Santander") {
    //     interes = 1.20;
    // } else if (banco === "Macro") {
    //     interes = 1.30;
    // } else if (banco === "Provincia") {
    //     interes = 1.70;
    // }

    // forma con Switch
    switch (banco) {
        case "Santander":
            interes = 1.20;
            break;
        case "Macro":
            interes = 1.30;
            break;
        case "Provincia":
            interes = 1.70;
            break;
        case "Nacion":
            interes = 1.50;
            break;
        case "Galicia":
            interes = 2.20;
            break;
        default:
            console.log("banco no esta");
    }

    return monto * interes
}

console.log(calcularPrestamo("Nacion", 100000))
