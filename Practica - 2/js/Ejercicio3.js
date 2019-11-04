var numero1 = Number(prompt("Introduzca el primer numero: "));
if (isNaN(numero1)){
    do{
        var numero1 = Number(prompt("No es un numero valido, vuelve a introducirlo: "));
    } while (isNaN(numero1));
}
var numero2 = Number(prompt("Introduzca el segundo numero: "));
if (isNaN(numero2)){
    do{
        var numero2 = Number(prompt("No es un numero valido, vuelve a introducirlo: "));
    } while (isNaN(numero2));
}
var cociente = 0;
var resto = 0;
var aux = numero1;
// Aqui solo aplicamos lo que nos indica el enunciado que es ir restando mientras el dividendo sea mayor que el divisor.
while (aux >= numero2){
    aux -= numero2;
    cociente++;
    resto = aux;
}
alert("Cociente = " + cociente + " Resto = " + resto);