function myFunction(){
    var element = document.body;
    element.classList.toggle("dark-mode");

    var header = document.querySelector(".menu");
    header.classList.toggle("dark-mode");
}

 const theme = document.getElementById("theme-change");
 theme.addEventListener("click",() =>{
 document.querySelector(".header").style.color ="#fff";
    // document.querySelector("body").style.color ="#fff";
 });