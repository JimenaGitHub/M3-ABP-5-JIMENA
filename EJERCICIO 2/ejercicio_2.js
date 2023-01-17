const number = document.getElementById("longitud")
const h2=document.getElementById("h2")
var contPrimo=0;

function primo(){
    for(let i=number.value; i>=1; i--){
        if (number.value % i == 0 ){
             contPrimo++
            
        }
    }
    if (contPrimo==2){
        h2.innerHTML="Es un número primo"
    }else  {
        h2.innerHTML=" No es un número primo"
    }
}