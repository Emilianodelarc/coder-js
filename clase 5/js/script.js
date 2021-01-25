var monto = parseInt(prompt("Ingrese Credito a solicitar!"));
var interes = parseInt(prompt("Ingrese intereses"));
var cuota = parseInt(prompt("Ingrese cantidad de cuotas"));


			var inteMen = (interes / 12) / 100;
			var cuotas = monto / cuota;
			var cuotasInt = (cuotas * (1 + inteMen));



        function Banco (monto, interes, cuotasInt){
			this.monto = monto;
			this.interes = interes;
			this.cuotasInt = cuotasInt;
			

            this.datosCredito =  function(){
                return this.cuotasInt
            };
        }

        var miBanco = new Banco(monto,interes,cuotasInt);
        console.log (miBanco)
        console.log("Su cuota sera de " + miBanco.datosCredito())
