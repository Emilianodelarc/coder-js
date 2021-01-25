//primer actividad
var numero = parseInt(prompt("ingrese un número mayor a 1000"));

if(numero >1000){
    alert("vaya que es mayor!")
}
else{
	alert("Lo siento no puedo procesar ese dato")
}
//segunda actividad
var saludo = prompt("ingrese Hola!");

if (saludo == "Hola"){
    console.log("genial! sigue las instrucciones");
}
else{
    alert("Siga las instrucciones")
}
//tercer actividad
var numero = parseInt(prompt("Cuatas cervezas bebes?, entre 10 a 50 lts/x semana"));
var numero1 = 10;
var numero2 = 50;

if(numero >= 10 && numero <= 50 ){
	alert("esta bien!");
}
else if (numero <= 10) {
	alert("Excelente cuidas tu salud!");
}
else {
	alert("Deberias beber menos!");
}
