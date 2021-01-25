var credito = parseInt(prompt("ingrese el monto de credito"))
var meses = parseInt(prompt("ingrese la cantidad de cuotas"))
cuotas()
frances()

function intereses(){
	var interes = 27;

	var inteMen = (interes / 12) / 100;

	 console.log("el interes es " + interes + "%");

	return inteMen;
}

function cuotas(){
	var cuota = (credito / meses) 

	var cuotaInt = cuota * (1 + intereses())

	console.log("su cuota es " + cuotaInt);

	return cuotaInt;
}
function frances(){
	 for (var i = 0; i <= meses ; i++){
	 console.log("cuotas nro: " + i )
	
	cuotas();
	}

}