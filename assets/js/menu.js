/* document.addEventListener("DOMContentLoaded",(event)=>{
    alert:("hola mundo")
    let button = document.querySelector(".layout_menu-toggle");
    let icon_bars = document.querySelector(".layout_menu-toggle .fa-bars");
    let icon_xmark = document.querySelector(".layout_menu-toggle .fa-xmark");
    let aside = document.querySelector(".layout__aside");

    button.addEventListener("click",(event)=>{
        let visible = document.querySelector(".layout__aside--visible");
        if(!visible){
            aside.classList.add("layout__aside--visible");
            icon_bars.style.opacity = 0;
            icon_xmark.style.opacity = 1; 
            icon_xmark
        }else{
            aside.classList.remove("layout__aside--visible");
            icon_bars.style.opacity = 1;
            icon_xmark.style.opacity = 0; 

        }
    });

/* aqui si la pantalla es mayor igual a 1060 se quita lo visible del menu hamburguesa */
/* window.addEventListener("resize", () => {
    let size = parseInt(document.body.clientWidth);

    if(size <= 1060){
        aside.classList.remove("layout__aside--visible");
        icon_bars.style.opacity = 1;
        icon_xmark.style.opacity = 0;
    }
    
});
}); */ 