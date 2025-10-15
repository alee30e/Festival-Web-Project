const data = new Date("Jul 30, 2025 00:00:00").getTime();
const x = setInterval(function() {
    const prezent = new Date().getTime();
    const timp = data - prezent;
    
    const zile = Math.floor(timp / (1000 * 60 * 60 * 24));
    const ore = Math.floor((timp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minute = Math.floor((timp % (1000 * 60 * 60)) / (1000 * 60));
    const secunde = Math.floor((timp % (1000 * 60)) / 1000);

    document.getElementById("zile").innerHTML = zile + " zile";
    document.getElementById("ore").innerHTML = ore + " ore";
    document.getElementById("minute").innerHTML = minute + " minute";
    document.getElementById("secunde").innerHTML = secunde + " secunde";
    
    if (timp < 0) {
        clearInterval(x);
        document.getElementById("invers").innerHTML = "Festivalul a început!";
    }
}, 1000);