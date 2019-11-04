//Archivo JS donde estan todas los ejercicios sin tener que ir llamando uno a uno cada archivo creado por ejercicio.
// Ejercicio 1
function Ejercicio1(){
    function acarreo (n1, n2){
        var digito1 = 0;
        var digito2 = 0;
        var acarreo = 0;
        var acarreo_final = 0;
    
        while(n1 >=1 || n2>=1){
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
    
          if((digito1 + digito2 + acarreo) >= 10){
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

}
// Ejercicio 2 
function Ejercicio2(){
    function MCD( num1, num2){
        var m = num1;
        var n = num2;
        var aux;

        var flag = true;
        while (flag){
            if ( m < n){
                aux = m;
                m = n;
                n = aux;
            } else if (m == n){
                console.log("El MCD es: " + n);
                return n;
                flag = false;
            }else{
                c = Math.floor(m / n);
                r = m % n;

                if (r == 0){
                    console.log("El MCD es: " + n);
                    return n;
                    flag= false;
                }else{
                    m = n;
                    n = r;
                }
            }
        }
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
    var mcd = MCD(numero1,numero2);
    if (mcd == 1){
        alert("Los numeros son coprimos entre si");
    }else{
        alert("Los numeros no nos coprimos entre si");
    }
    
}

// Ejercicio 3
function Ejercicio3(){
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

    while (aux >= numero2){
        aux -= numero2;
        cociente++;
        resto = aux;
    }
    alert("Cociente = " + cociente + " Resto = " + resto);
}
// Ejercicio 4
function Ejercicio4(){
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
    var suma = 0;
    for (var i=numero2; i > 0; i--){
        suma += numero1;
        console.log(suma);
    }
    console.log(suma);

    alert("El resultado final: " + suma);
}

// Ejercicio 5
function Ejercicio5(){
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
    var final = numero1.toString(numero2);
    alert("El numero al final es " + final);
    
}




// Ejercicio 6
function Ejercicio6(){
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
        ++contadorCadaFactor;
        numero1 /= factorPrimo;
        }
        if (contadorCadaFactor > 0) {
        final=final+" "+ ("(" + factorPrimo + "^" + (contadorCadaFactor) + ") ");
    
        }
        factorPrimo++;
    } //while
    
        alert("La descomposicion en factores primos el numero "+numero+" es :\n" + final+"\n");
}

// Ejercicio 7
function Ejercicio7(){
    var numero1 = Number(prompt("Introduzca el primer numero: "));
    if (isNaN(numero1)){
        do{
            var numero1 = Number(prompt("No es un numero valido, vuelve a introducirlo: "));
        } while (isNaN(numero1));
    }
    var sumarDigitos = function(num) {
        if(0<num) {
          return (num%10) + sumarDigitos(Math.floor(num/10));
        }
        return num;
      };
    alert(sumarDigitos(numero1));
}

//Ejercicio 8
function Ejercicio8(){
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

}

