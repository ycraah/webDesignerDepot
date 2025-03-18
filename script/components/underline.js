const textUnderlineEffect = (() => {
    const navLinks = document.querySelectorAll(".menu__link");
    navLinks.forEach(link => {
        link.insertAdjacentHTML("afterend", "<div class='underline disabled'><svg id='wavy-svg' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:ev='http://www.w3.org/2001/xml-events' viewBox='0 0 20 4'><style type='text/css'>.st0{animation:shift 0.4s linear infinite;}@keyframes shift {from {transform:translateX(0);}to {transform:translateX(-20px);}}</style><path fill='none' stroke='#E3FF59' stroke-width='1' class='st0' d='M0,3.5 c 5,0,5,-3,10,-3 s 5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/></svg></div>");
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