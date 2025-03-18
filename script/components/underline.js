const textUnderlineEffect = (() => {
    const navLinks = document.querySelectorAll(".menu__link");
    navLinks.forEach(link => {
        link.insertAdjacentHTML("afterend", "<div class='underline disabled'></div>");
    }); //underline 생성기

    for(let i = 0; i < navLinks.length; i++){
        const underline = navLinks[i].nextElementSibling;
        navLinks[i].addEventListener("mouseenter", () => {
            underline.classList.add( "active");
        }); 
        navLinks[i].addEventListener("mouseleave", () => {
            underline.classList.remove( "active");
        });
    }

});

export {textUnderlineEffect};