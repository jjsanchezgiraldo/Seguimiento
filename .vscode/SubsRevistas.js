let opcionesRevistas = prompt ("De las siguientes opciones elija la revista a la que desea suscribirse: Dinero, National Geographic o American Journal")
let opcionesMesesRevistas = parseInt(prompt("De las siguientes opciones Elija los meses que desea adquirir dicha revista: 3 meses,6 meses,12 meses"))
let operadorMóvil = prompt ("De las siguientes opciones selecciones su operador móvil: Claro,Movistar,WOM,Tigo")
//Dinero
if ((opcionesRevistas == "Dinero") && (operadorMóvil == "Claro")) 
    opcionesMesesRevistas = parseInt (prompt("Elija el tiempo en meses que desea suscribirse a esta revista"));
    if(opcionesMesesRevistas == "3") {
        valorFinal == 6 * 95/100; 
        console.log(valorFinal);
    }if (opcionesMesesRevistas == "6") {
        valorFinal == 11 * 95/100;
        console.log(valorFinal);
    }if (opcionesMesesRevistas == "12") {
        valorFinal == 20 * 95/100;
        console.log(valorFinal);


    }
else if (opcionesRevistas == "Dinero" && operadorMóvil == "Movistar, WOM, Tigo")
    {
         opcionesMesesRevistas = parseInt(prompt("Elija el tiempo en meses que desea suscribirse a esta revista"));
        if (opcionesMesesRevistas == "3") {
            console.log("Debes pagar 6USD");
        }if (opcionesMesesRevistas == "6") {
            console.log("Debes pagar 11USD");
        }if (opcionesMesesRevistas == "12")
            console.log("Debes pagar 20USD");
        }
        
    //National Geographic
    if ((opcionesRevistas =="National Geographic") && (operadorMóvil == "Claro")){
    }
        (opcionesMesesRevistas == "3");{
            valorFinal == 10 * 95/100
            console.log(valorFinal);  
        }if (opcionesMesesRevistas =="6"){
            valorFinal == 13 * 95/100
            console.log (valorFinal);
        }if (opcionesMesesRevistas == "12"){
            valorFinal == 22 * 95/100
            console.log (valorFinal);

        }
else if (opcionesRevistas == "National Geographic" && operadorMóvil == "Movistar,WOM,Tigo")
    {
         opcionesMesesRevistas = parseInt(prompt("Elija el tiempo en meses que desea suscribirse a esta revista"));
         if(opcionesMesesRevistas == "3")
        console.log ("Debes pagar 10USD")
        }if(opcionesMesesRevistas == "6")
            console.log ("Debes pagar 13USD");{
        }if (opcionesMesesRevistas == "12")
            console.log ("Debes pagar 22USD");


    //American Journal
    if ((opcionesRevistas =="American Journal") && (operadorMóvil == "Claro"))
        opcionesMesesRevistas = parseInt (prompt("Elija el timpo que desea adiquiri esta revista"));
        if(opcionesMesesRevistas == "3") {
         valorFinal == 12 * 95/100;
         console.log (valorFinal);
        }if (opcionesMesesRevistas == "6"){
            valorFinal ==18 * 95/100
            console.log (valorFinal);
        }if (opcionesMesesRevistas == "12") {
            valorFinal == 30*95/100
            console.log(valorFinal);
    }
else if     (opcionesRevistas == "American Journal" && operadorMóvil == "Movistar, WOM, Tigo")
     {        opcionesMesesRevistas = parseInt (prompt ("Elija el tiempo en meses que desea suscribirse a esta revista"));
    {
            }if (opcionesMesesRevistas =="3"){
             console.log ("Debes pagar 12USD");
            }if (opcionesMesesRevistas =="6") {
            console.log ("Debes pagar 18USD");
            }if (opcionesMesesRevistas =="12")
                console.log("Debes pagar 30USD");
     }



