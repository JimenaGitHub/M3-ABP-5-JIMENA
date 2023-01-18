/* 4.- Construya una función que dado un número n entero mayor que 10 y menor que 1000 calcule la sumatoria de todos los números pares contenidos en el rango. */


const number = document.getElementById("longitud")
const h2=document.getElementById("h2")
 var sumaTotal=0;

function pares(){
    for (let i=0; i<=number.value; i++){

        if (i % 2==0){
            console.log(i)
            sumaTotal+=i
        }   
    }
    h2.innerHTML="la suma total es "+ sumaTotal
}