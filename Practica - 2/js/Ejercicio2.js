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
/* En esta funcion aplicamos el principio de algoritmo de euclides que nos permite saber 
el MCD de dos numeros por tanto lo calculamos y comprobamos que numero da, en caso de que sea
1 quiere decir que son coprimos entre ellos y si da un numero distinto quiere decir que no lo son*/
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