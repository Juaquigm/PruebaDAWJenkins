var numero1 = Number(prompt("Introduzca un numero: "));
    if (isNaN(numero1)){
        do{
            var numero1 = Number(prompt("No es un numero valido, vuelve a introducirlo: "));
        } while (isNaN(numero1));
    }

var numero = numero1;
var factorPrimo = 2;
var contadorCadaFactor=0;
var final="";
while (numero1 > 1){
    contadorCadaFactor = 0;

    while ( (numero1 % factorPrimo) == 0) {
    //Encontrado factor 
    ++contadorCadaFactor; // El numero de veces que contamos el factor en el que estemos
    numero1 /= factorPrimo;
    }
    if (contadorCadaFactor > 0) {
    final=final+" "+ ("(" + factorPrimo + "^" + (contadorCadaFactor) + ") "); //Mensaje final 

    }
    factorPrimo++; // Añadimos un factor mas 
} 

alert("La descomposicion en factores primos el numero "+numero+" es :\n" + final+"\n");