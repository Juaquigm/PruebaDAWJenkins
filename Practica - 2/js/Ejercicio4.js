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
// Aqui aplicamos la suma del numero por el numero de veces que le indiquemos.
var suma = 0;
for (var i=numero2; i > 0; i--){
    suma += numero1;
    console.log(suma);
}
console.log(suma);

alert("El resultado final: " + suma);