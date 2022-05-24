const StyleToggler = document.querySelector(".style-toggler");
const StyleSwitcher = document.querySelector(".style-switcher");
StyleToggler.addEventListener("click" , ()=>{
    StyleSwitcher.classList.toggle("open");
})


// hide style -switcher on scroll================================

window.addEventListener("scroll", ()=>{
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})



// --------- theme colors----------------//

const alternatStyles=document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternatStyles.forEach((style)=>{
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled")
        }else{
            style.setAttribute("disabled","true");
        }
    });
}