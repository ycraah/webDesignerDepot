const contentBoxGenerator = () => {
    const contentBoxs = document.querySelectorAll(".content-box");
    contentBoxs.forEach((contentBox) => {
        const $newDiv = document.createElement('div');
        $newDiv.classList.add('border--rainbow-rotate');
        const $newDivChild = document.createElement('div');
        $newDivChild.classList.add('inner-box');
        $newDiv.appendChild($newDivChild);
        contentBox.appendChild($newDiv);
        contentBox.addEventListener("mouseenter", ()=> {
            const borderBox = contentBox.querySelector('.border--rainbow-rotate');
            const imgBox = contentBox.querySelector('.content-box__image');
            const icon = contentBox.querySelector('.content-box__icon');
            borderBox.classList.add('active');
            imgBox.classList.add('active');
            icon.classList.add('active');
        });
        contentBox.addEventListener("mouseleave", () => {
            const borderBox = contentBox.querySelector('.border--rainbow-rotate');
            const imgBox = contentBox.querySelector('.content-box__image');
            const icon = contentBox.querySelector('.content-box__icon');
            borderBox.classList.remove('active');
            imgBox.classList.remove('active');
            icon.classList.remove('active');
        });
    });
}

export {contentBoxGenerator};