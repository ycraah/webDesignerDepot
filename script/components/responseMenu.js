const responseMenu = () => {
    const hamburgerMenu = document.querySelector('.header__hamburger');
    const responseNav = document.querySelector('.header__response-nav');
    hamburgerMenu.addEventListener("click", () => {
        hamburgerMenu.classList.toggle("active");
        responseNav.classList.toggle("active");
    });
    responseNav.addEventListener("wheel", (e) => {
        e.preventDefault();
    });
}

export {responseMenu}