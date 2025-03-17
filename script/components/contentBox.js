const contentBoxGenerator = () => {
    const contentBoxs = document.querySelectorAll(".content-box");
    contentBoxs.forEach((contentBox) => {
        const newDiv = document.createElement('div');
        newDiv.classList.add('border--rainbow-rotate');
        const newDivChild = document.createElement('div');
        newDivChild.classList.add('inner-box');
        newDiv.appendChild(newDivChild);
        contentBox.appendChild(newDiv);
        contentBox.addEventListener("mouseenter", ()=> {
            const borderBox = contentBox.querySelector('.border--rainbow-rotate');
            borderBox.classList.add('active');
        });
        contentBox.addEventListener("mouseleave", () => {
            const borderBox = contentBox.querySelector('.border--rainbow-rotate');
            borderBox.classList.remove('active');
        });
    });
}

export {contentBoxGenerator};