// 1.- Construya una función que dado un número n entero y menor que 100 calcule la sumatoria de 1 hasta n.

const number = document.getElementById("longitud")
const h2=document.getElementById("h2")

var sumaTotal=0;

function suma(){
    for (let i=0; i<= number.value ; i++ ){
        sumaTotal += i

    }

    h2.innerHTML= sumaTotal

}