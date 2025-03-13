const ChangeLogoColorOnHover = function () {
    const fills = ["#763DB5", "#EF1FA2", "#E4FE5A"];
    const logo = document.querySelector(".logo__svg");
    const paths = logo.querySelectorAll("path");
    const delay = 80;
    let index = paths.length;

    paths.forEach((path, i) => {
        path.style.transition = "fill 0.2s";
        path.style.fill = fills[i];
    });

    function changePathColor(i, color, delay) {
        setTimeout(() => {
            paths[i].style.fill = color;
        }, delay);
    }

    function pathFadeLeftStart() {
        for (let i = 0; i < index; i++) {
            changePathColor(i, "#000", delay * i);
        }
        for (let i = 0; i < index; i++) {
            changePathColor(i, fills[i], delay * index + delay * i);
        }
    }

    function pathFadeRightStart() {
        for (let i = index - 1; i >= 0; i--) {
            changePathColor(i, "#000", delay * (index - 1 - i));
        }
        for (let i = index - 1; i >= 0; i--) {
            changePathColor(i, fills[i], delay * index + delay * (index - 1 - i));
        }
    }

    logo.addEventListener("mouseleave", pathFadeLeftStart);
    logo.addEventListener("mouseenter", pathFadeRightStart);
}

export { ChangeLogoColorOnHover };