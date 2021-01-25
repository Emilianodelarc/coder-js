var credito = parseInt(prompt("Ingrese Credito a solicitar!"));

var cuota = parseInt(prompt("Ingrese cantidad de cuotas"));

var banco = prompt("ingrese su banco ('Santander, Macro, Provincia, Nación, Galicia')");
var resultado = banco.trim;

var info = [];
var dinero = info.push(credito);
var meses = info.push(cuota);
var entidad = info.push(banco.toUpperCase());
console.log(info);

for (var i=0; i<info.length; i++){
    console.log("sus datos fueron: " + info[i]);
}

function  calcularPrestamo (banco, credito) {
    let interes; 

    switch (banco) {
        case "santander":
            interes = 1.20;
            break;
        case "macro":
            interes = 1.30;
            break;
        case "provincia":
            interes = 1.70;
            break;
        case "nacion":
            interes = 1.50;
            break;
        case "galicia":
            interes = 2.20;
            break;
        default:
            console.log("banco no esta");
    }

    return credito * interes
}

var cuotas = calcularPrestamo(banco, credito) / cuota

console.log(" sus cuotas seran de: " + cuotas);




        




