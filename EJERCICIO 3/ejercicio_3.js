/* 3.- Cree una función que dado un número n entero y menor que 100 imprima la cuenta regresiva, es decir si n es 5 deberá imprimir 5,4,3,2,1. */


const number = document.getElementById("longitud")
const h2=document.getElementById("h2")
 var arreglo=[]

function decreciente(){
    for (let i=number.value; i>=0; i--){
        arreglo.push(i)
        
    }
    h2.innerHTML=arreglo
}