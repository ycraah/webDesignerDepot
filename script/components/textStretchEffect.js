const textStretchEffect = () =>{
    //headerText
    const svgTextArr = ["#753db5", "#73d2b7", "#eb7fb0", "#ef20a1", "#e3fe59", "#4acce7", "#f3dc91", "#ea89b7", "#63d2c5", "#8c29b6", "#ef37a6", "#e4ff5b", "#56d6d6", "#f220a2", "#813abc", "#e3ff5a"]; 
    svgTextArr.reverse();
    const pathsArr = document.querySelectorAll('#web > path');
    pathsArr.forEach((path, index) => {
        path.style.fill = svgTextArr[index];
        path.style.transition = "all 0.2s";
        path.style.transformOrigin = "50% 50%";
        
        path.addEventListener("mouseenter", () => {
            path.style.transform = "scaleY(1.2)";
            if (path.previousElementSibling) {
                path.previousElementSibling.style.transform = "scaleY(1.1)";
            }
            if (path.nextElementSibling) {
                path.nextElementSibling.style.transform = "scaleY(1.1)";
            }
          });
          path.addEventListener("mouseleave", () => {
            path.style.transform = "scaleY(1)";
            if (path.previousElementSibling) {
                path.previousElementSibling.style.transform = "scaleY(1)";
            }
            if (path.nextElementSibling) {
                path.nextElementSibling.style.transform = "scaleY(1)";
            }
          });
        
    }); 

    //footerText
    const footerText = 'subscribe now'.toUpperCase();
    const footerTextArr = footerText.split('');
    const footerTextBox = document.querySelector('.subscribe__text-list');
    for(let i = 0; i < footerTextArr.length; i++){
        const $p = document.createElement('span');
        $p.classList.add('subscribe__text')
        const $textNode = document.createTextNode(footerTextArr[i]);
        $p.appendChild($textNode);
        footerTextBox.appendChild($p);
    }
    const footerTexts = document.querySelectorAll('.subscribe__text');
    footerTexts.forEach((text) => {
        text.style.display = "inline-block";
        text.style.transition = "all 0.2s";
        text.style.transformOrigin = "50% 50%";
        
        text.addEventListener("mouseenter", () => {
            text.style.transform = "scaleY(2.5)";
            if (text.previousElementSibling) {
                text.previousElementSibling.style.transform = "scaleY(2.3)";
            }
            if (text.nextElementSibling) {
                text.nextElementSibling.style.transform = "scaleY(2.3)";
            }
          });
          text.addEventListener("mouseleave", () => {
            text.style.transform = "scaleY(2)";
            if (text.previousElementSibling) {
                text.previousElementSibling.style.transform = "scaleY(2)";
            }
            if (text.nextElementSibling) {
                text.nextElementSibling.style.transform = "scaleY(2)";
            }
          });
        
    })
}

export {textStretchEffect}