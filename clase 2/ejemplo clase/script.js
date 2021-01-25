var golesEquipoA = parseInt(prompt("cuanto goles hizo Equipo A?"));
var golesEquipoB = parseInt(prompt("cuanto goles hizo Equipo B?"));

if(golesEquipoA > golesEquipoB){
	console.log("gano el equipo A")
}
else if (golesEquipoA > golesEquipoB) {
	console.log("gano equipo B")
}
else if (golesEquipoA == golesEquipoB){
	console.log("los equipos fueron empatados")
}
//si no hay ningun valor
else{
	console.log("se supendio por lluvia")
}