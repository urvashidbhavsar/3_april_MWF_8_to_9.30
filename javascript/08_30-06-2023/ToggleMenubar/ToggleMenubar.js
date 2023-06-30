let toggleBtn = document.querySelector(".tbtn");
let nav = document.querySelector(".menubar");
toggleBtn.addEventListener("click",function(){
    nav.classList.add("nav-toggle");
})

let closebtn = document.querySelector(".cbtn")
closebtn.addEventListener("click", function () {
    nav.classList.remove("nav-toggle");
})