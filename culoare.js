const button = document.getElementById("changeColorButton");
const info = document.getElementById("currentColorInfo");

button.addEventListener("click", () => {
    const randomColor = `hsl(${Math.random() * 360}, 70%, 80%)`;
    document.body.style.backgroundColor = randomColor;
    
    const computedStyle = getComputedStyle(document.body);
    const bgColor = computedStyle.backgroundColor;

    info.textContent = `Current background color: ${bgColor}`;
});
