let button = document.getElementById("#responsive-button");
let responsivee = document.getElementById("#menu");
button.addEventListener('click', responsive())

function responsive(){
    responsivee.classList.add("hola")
    if (responsive.classList.contains("display-none")){
        responsive.classList.remove("display-none")
    }else{
        responsive.classList.add("display-none");
    }


}