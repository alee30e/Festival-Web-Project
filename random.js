document.querySelectorAll('.bilet').forEach(function(bilet){
    bilet.addEventListener('click', function() {
            let bilete = document.querySelectorAll('.bilet');
            bilete.forEach(bilet => {
                let culoareNoua = genereazaCuloarePastel();
                bilet.style.backgroundColor = culoareNoua;
            });

    });
});

function genereazaCuloarePastel() {
    let hue = Math.floor(Math.random() * 360);
    let saturation = Math.random() * 20 + 50;
    let lightness = Math.random() * 10 + 80;

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}