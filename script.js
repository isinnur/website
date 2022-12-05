function myFunction(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}


const about = document.querySelector(".about");
about.addEventListener("click",func());



function gelcekMenu(){
    var menu = document.querySelector('.gelcek');
    var navigation = document.querySelector('.navigation');
    menu.classList.toggle('active');
    navigation.classList.toggle('active');
}
