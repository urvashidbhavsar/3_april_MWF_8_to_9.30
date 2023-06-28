// some inbuilt functions in js which is used to add or remove css

// (1) add() => use to add value in webpage 
// (2) remove() => use to remove value form webpage. 
// (3) toggle() => use to add or remove from webpage. 
// (4) contains() => check your value exist or not 
// (5) classList => property to use add or remove css class 

let toggleBtn = document.querySelector(".tbtn");
let nav = document.querySelector(".navbar");
let icon = document.querySelector(".fa-bars");
toggleBtn.addEventListener("click",function(){
    nav.classList.toggle("nav-toggle");

    if (nav.classList.contains("nav-toggle") == true){
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-close")
    }else{
        icon.classList.remove("fa-close")
        icon.classList.add("fa-bars")
    }
})