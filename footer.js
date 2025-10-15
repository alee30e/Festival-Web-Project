function toggleColor(event) {
    event.stopPropagation();
    const clickedButton = event.currentTarget;
    
    const computedStyle = window.getComputedStyle(clickedButton);
    const currentColor = computedStyle.backgroundColor;
    if (currentColor !== "rgb(255, 0, 0)") {
        clickedButton.classList.add('active');
    } else {
        clickedButton.classList.remove('active');
    }
}

document.querySelectorAll('.footercontainer a').forEach(button => {
    button.addEventListener('click', toggleColor);
});
