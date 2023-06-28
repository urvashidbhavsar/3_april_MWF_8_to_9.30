function changebg_header(){
    // let changebg = document.getElementById("headerTop");
    let changebg = document.querySelector("header")
    let current = window.scrollY;
    if (current > 0) {
        changebg.classList.add("header-fixed")
    } else {
        changebg.classList.remove("header-fixed")
    }
}
window.addEventListener("scroll", changebg_header)