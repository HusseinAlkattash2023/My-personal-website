/*---------navigation menu-------------- */

(()=>{
const MenuBtn = document.querySelector(".Menu-btn");
const NavMenu=document.querySelector(".nav-menu");
const CloseNavMenu=document.querySelector(".close-nav-menu");
const Span=document.querySelector(".span");


MenuBtn.addEventListener("click",showNanMenu);
CloseNavMenu.addEventListener("click",showNanMenu);

function showNanMenu(){
    NavMenu.classList.toggle("open");
    FadeOutEffect();
}

function FadeOutEffect(){
    document.querySelector(".fade-out-effect").classList.add("active1");
    
    setTimeout(
        ()=>{
            document.querySelector(".fade-out-effect").classList.remove("active1");      
        }, 3000);
}
document.addEventListener("click",(event)=>{
    if(event.target.classList.contains("link-item")){
      
        if(event.target.hash !== ""){
            event.preventDefault();
            const hash=event.target.hash;
            document.querySelector(".section.active_").classList.add("hide");
            document.querySelector(".section.active_").classList.remove("active_");

            document.querySelector(hash).classList.add("active_");
            document.querySelector(hash).classList.remove("hide");


            NavMenu.querySelector(".active2").classList.add("outer-shadow","hover-in-shadow");
            NavMenu.querySelector(".active2").classList.remove("active2","inner-shadow");

            if(NavMenu.classList.contains("open")){
                event.target.classList.add("active2","inner-shadow");
                event.target.classList.remove("outer-shadow","hover-in-shadow");
    
                showNanMenu();
            }else{
                let navItems=NavMenu.querySelectorAll(".link-item");
                navItems.forEach((item)=>{
                    if(hash===item.hash){
                        item.classList.add("active2","inner-shadow");
                        item.classList.remove("outer-shadow","hover-in-shadow");
                    }
                });
                FadeOutEffect();
            }
            window.location.hash=hash;
        }
    }
})

 

})();


/*---------about section tabs---------*/ 
(()=>{
    const aboutSection=document.querySelector(".about-section"); 
const tabsCountainer=document.querySelector(".about-tabs"); 

tabsCountainer.addEventListener("click" , (event)=>{
    if(event.target.classList.contains("tab-item") && !event.target.classList.contains("active")){
        const target=event.target.getAttribute("data-target");
        tabsCountainer.querySelector(".active").classList.remove("outer-shadow","active")
        event.target.classList.add("active","outer-shadow");

        // aboutSection.querySelector(".tab-content.active").classList.remove("active");
  
        // aboutSection.querySelector("target").classList.add("active");
    }
})
})();

const skills=document.querySelector(".skills");
const education = document.querySelector(".education");
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");

button1.onclick=()=>{
    skills.classList.remove("active");
    education.classList.add("active");
}
button2.onclick=()=>{
    skills.classList.add("active");
    education.classList.remove("active");
    
}

/*-----------hide all section expect active-------------*/


(()=>{
    const sections =document.querySelectorAll(".section");
    sections.forEach((section)=>{
        if(!section.classList.contains("active_")){
            section.classList.add("hide");
        } 
    })
})();



window.addEventListener("load", ()=>{
    document.querySelector(".fade-out-effect").classList.add("active1");
    
    setTimeout(
        ()=>{
            document.querySelector(".fade-out-effect").classList.remove("active1");      
        }, 3000);
});