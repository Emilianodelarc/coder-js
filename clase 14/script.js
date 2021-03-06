
//----------Validacion de input----------------
var cred = document.getElementById("credito")
var ban = document.getElementById("banco")
var cuo = document.getElementById("cuotas")

 cred.addEventListener("blur", validarCampo);
 ban.addEventListener("blur", validarCampo);
 cuo.addEventListener("blur", validarCampo);
 
 function validarCampo(event){
 
     var valor = event.target.value;
 
     if (valor == ""){
         event.target.className = "form-control is-invalid"
     } else {
         event.target.className = "form-control"
     }
 
}

//------------obtencion de datos-------------
function capturar(){
    //console.log("capturado")
    function Banco (credito, banco,cuota,cuotas){
        this.credito = credito;
        this.banco = banco;
        this.cuota = cuota;
        this.cuotas = cuotas;
    }
     creditoCapturar = document.getElementById("credito").value;
    //console.log(creditoCapturar);
     bancoCapturar = document.getElementById("banco").value;
    //console.log(bancoCapturar);
     cuotaCapturar = document.getElementById("cuotas").value;
    //console.log(cuotaCapturar);
    cuotas = calcularPrestamo(bancoCapturar, creditoCapturar) / cuotaCapturar;
    
    nuevoCredito = new Banco(creditoCapturar, bancoCapturar,cuotaCapturar, cuotas);
    //console.log(nuevoCredito);

     
    agregar();
}

//------------- recoje los datos y los publica en la tabla---------
var baseDatos = [];

function agregar(){
    baseDatos.push(nuevoCredito);
    console.log(baseDatos);
    
    document.getElementById("tabla").innerHTML += '<tbody id="cuerpo"><td>'+nuevoCredito.credito+'</td><td>'+nuevoCredito.banco+'</td><td>'+nuevoCredito.cuota+'</td><td>'+cuotas+'</td></tbody>';
};

//------------ Calcula interes segun banco--------------

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

//----------Borra la primer consulta dejando la ultima o borra todo--------
var botonRemover = document.getElementById("boton-remover");

botonRemover.addEventListener('click', remover);

function remover(){

   borrar = document.getElementById('cuerpo');
   borrar.remove();
}

//-------- muestra la ultima consulta o ultimos datos------

document.getElementById('boton-mostrar').onclick = mostrarUl;

function mostrarUl (){

    document.getElementById("tabla").innerHTML += '<tbody id="cuerpo"><td>'+nuevoCredito.credito+'</td><td>'+nuevoCredito.banco+'</td><td>'+nuevoCredito.cuota+'</td><td>'+cuotas+'</td></tbody>';
   
}



$( document ).ready(function(){
    $('#boton-inter').click(function (){
        $.get( "https://pokeapi.co/api/v2/pokemon/ditto",
        function(data, status){
            console.log(data)
            
        }
    );
})
});
