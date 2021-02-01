


function capturar(){
    //console.log("capturado")
    function Banco (credito, banco,cuota){
        this.credito = credito;
        this.banco = banco;
        this.cuota = cuota;
    }
     creditoCapturar = document.getElementById("credito").value;
    //console.log(creditoCapturar);
     bancoCapturar = document.getElementById("banco").value;
    //console.log(bancoCapturar);
     cuotaCapturar = document.getElementById("cuotas").value;
    //console.log(cuotaCapturar);

    nuevoCredito = new Banco(creditoCapturar, bancoCapturar,cuotaCapturar);
    //console.log(nuevoCredito);
    agregar();
}

var baseDatos = [];
function agregar(){
    baseDatos.push(nuevoCredito);
    console.log(baseDatos);
    var cuotas = calcularPrestamo(bancoCapturar, creditoCapturar) / cuotaCapturar;
    
    document.getElementById("tabla").innerHTML += '<tbody><td>'+nuevoCredito.credito+'</td><td>'+nuevoCredito.banco+'</td><td>'+nuevoCredito.cuota+'</td><td>'+cuotas+'</td></tbody>';
};

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

    return credito * interes;
}
    


