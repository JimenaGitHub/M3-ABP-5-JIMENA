/* 5.- Cree una función que permite dado un número n imprima la tabla de multiplicar de dicho número hasta el 12. */


const number = document.getElementById("longitud")
const h2=document.getElementById("h2")
 var sumaTotal=0; 
 var arreglo=[]

 function multiplicar(){
    for(let i=1 ; i<=12;i++){
        arreglo.push((number.value * i))

    }
    h2.innerHTML=arreglo
    return
 }