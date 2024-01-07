const cantidad = document.getElementById("cantidad");
const sumar = document.getElementById("sumar");
const restar = document.getElementById("restar");


let numero = 0;

sumar.addEventListener("click" ,() => {
    numero++;
    cantidad.innerHTML = numero; 
});
restar.addEventListener("click" ,() => {
    if(numero == 0){
        return 0;
    }else{
        numero--;
        cantidad.innerHTML = numero;
    }
});