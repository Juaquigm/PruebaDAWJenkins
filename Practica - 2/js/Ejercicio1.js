function acarreo (n1, n2){
    var digito1 = 0;
    var digito2 = 0;
    var acarreo = 0;
    var acarreo_final = 0; // Variable donde se almacena el valor final del acarreo (Es decir el numero de acarreos que se hacen)

    while(n1 >=1 || n2>=1){ // Condicion de que sea igual o mayor que 1 para efectuar la suma 
      if(n1 < 1){
        digito1 = 0;
      }else{
        digito1 = n1 % 10;
      }

      if(n2 < 1){
        digito2 = 0;
      }else{
        digito2 = n2 % 10;
      }

      if((digito1 + digito2 + acarreo) >= 10){ // Condicion para que se efectue el acarreo 
        acarreo_final++; 
        acarreo = Number((digito1 + digito2 + acarreo_final)/10);
      }
      n1 = Number(n1 / 10); 
      n2= Number(n2 / 10);
    }
    return acarreo_final;
    console.log(acarreo_final);


}

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
var final = acarreo(numero1,numero2);
console.log(final);
alert("Numero de acarreos de los dos numeros: " + final);