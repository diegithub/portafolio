(function () {
    let navegador = document.querySelector("#navbar");
    let hamburger = document.querySelector("#hamburguer");
    hamburger.addEventListener("click",() => {
        navegador.classList.toggle("open");
    })
})()