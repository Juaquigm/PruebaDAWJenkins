var numero1 = Number(prompt("Introduzca el primer numero: "));
    if (isNaN(numero1)){
        do{
            var numero1 = Number(prompt("No es un numero valido, vuelve a introducirlo: "));
        } while (isNaN(numero1));
    }
    //Funcion recursiva que vamos cogiendo cada digito al dividir el numero entre 10 (es decir su parte entera)
    // Al tomar ese numero lo vamos sumando a una variable.
    var sumarDigitos = function(num) {
        if(0<num) {
          return (num%10) + sumarDigitos(Math.floor(num/10));
        }
        return num;
      };
    alert(sumarDigitos(numero1));