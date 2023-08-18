var menu = document.querySelector(".menu-nav");
var button =document.querySelector(".menu-button");
var body = document.querySelector("body");

button.addEventListener("click",()=>{
        button.classList.toggle("menu-button-active");
        menu.classList.toggle("menu-nav-active");
        if( body.style.overflow === "" ){
                body.style.overflow = "hidden";
        }
        else{
                body.style.overflow = "";
        }
});