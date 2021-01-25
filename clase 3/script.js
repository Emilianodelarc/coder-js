var maxNota = 10;
var minNota = 1;

pedirNotasYSacarPromedio()

        //Validacion de Nota
        function ingresarNota(){

            var nota;

            nota = parseInt(prompt("Ingrese una nota entre " + minNota + " y " + maxNota))

            while(nota > maxNota || nota < minNota || !nota ){
                alert("Tu nota no es válida")
                nota = parseInt(prompt("Ingrese una nota"))
            }

            return nota;
        }
        //Calculador de nota y promedio Trimestral
        function pedirNotasYSacarPromedio(){

            var nota1 = ingresarNota();
            var nota2 = ingresarNota();
            var nota3 = ingresarNota();
            
            var promedio = sacarPromedio(nota1, nota2, nota3)

            return promedio;
        }

        //calculador de Promedio
        function sacarPromedio(nota1, nota2, nota3){
            var promedio = (nota1 + nota2 + nota3) / 3;

            return promedio;
        }

        //Califacion final del ciclo lectivo
         function final(nota1){

             if (nota1 >= 6) {
                console.log ("Aprobo ciclo lectivo 2020")
             }
             else{
                console.log(" No Aprobo ciclo lectivo 2020")
             }
            return nota1;
            
         }
         //Boletin Electronico :)
         for(var i=1; i<6; i++) {
            console.log("Alumno nro " + i)
    
                var promedio1 = pedirNotasYSacarPromedio();
                var promedio2 = pedirNotasYSacarPromedio();
                var promedio3 = pedirNotasYSacarPromedio();
      
                console.log("Promedio primer trimestre: " + promedio1)
                console.log("Promedio segundo trimestre: " + promedio2)
                console.log("Promedio tercer trimestre: " + promedio3)
       
                var promedioFinal = sacarPromedio(promedio1, promedio2, promedio3);

             console.log("Promedio final: " + promedioFinal);
             
             final(promedioFinal)
         }
