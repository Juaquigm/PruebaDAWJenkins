var numero1 = Number(prompt("Introduzca el primer numero: "));
 if (isNaN(numero1) || (numero1 > 21)){
    do{
        var numero1 = Number(prompt("No es un numero valido, vuelve a introducirlo: "));
    } while (isNaN(numero1));
}
var total = 1; 
for (i=1; i<=numero1; i++) {
    total = total * i; 
}
total = total.toString();
var busqueda="0";
var contador=0;
console.log(total[0]);
console.log(total.length);
// Separamos el numero y tomamos la ultima posicion hasta el 0 con la condicion de que si encontramos un 
// numero distinto de 0 pues termina el bucle
var final = total.length - 1;
for (var i = final; i >= 0; i--){
if (total[i] == busqueda){
    contador++;
    }
else{
    break;
}
}
alert("El numero tiene " + contador + " ceros");
