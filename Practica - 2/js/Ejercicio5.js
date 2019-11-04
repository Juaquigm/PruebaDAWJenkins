var numero1 = Number(prompt("Introduzca el numero a cambiar: "));
if (isNaN(numero1)){
    do{
        var numero1 = Number(prompt("No es un numero valido, vuelve a introducirlo: "));
    } while (isNaN(numero1));
}
var numero2 = Number(prompt("Indique la base a cambiar: "));
if (isNaN(numero2)){
    do{
        var numero2 = Number(prompt("No es un numero valido, vuelve a introducirlo: "));
    } while (isNaN(numero2));
}
// Nos permite cambiar de base facilmente con la siguiente funcion. ToString que nos convierte a String el numero con la base que le indiquemos.
var final = numero1.toString(numero2);
alert("El numero al final es " + final);