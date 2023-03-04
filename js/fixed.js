/*(function () {
    let navegador = document.querySelector("#navbar");
    let main = document.querySelector("main");
    let navbarHeight = navegador.getBoundingClientRect().height;
    let breakPoint = main.offsetTop - navbarHeight;
    let isFixed = false;
    let posicionVentana;

    function updatePos () {
        posicionVentana = window.scrollY;
    }

    function onScroll () {
        updatePos();

        if(posicionVentana>=breakPoint && !isFixed){
            navegador.classList.remove("open");

            navegador.classList.add("navbar-fixed");
            main.style.cssText = "margin-top: " + navbarHeight + "px;";
            isFixed = true;
        }else if (posicionVentana<breakPoint && isFixed) {
            navegador.classList.remove("navbar-fixed");
            main.style.cssText = "margin.top: " + 0;
            isFixed = false;
        }
    }
    document.addEventListener("scroll", onScroll);
})()*/
(function () {
    let navegador = document.querySelector("#navbar");
    let main = document.querySelector("main");
    let navbarHeight = navegador.getBoundingClientRect().height;
    let breakPoint = main.offsetTop - navbarHeight;
    let isFixed = false;
    let posicionVentana;

    function updatePos () {
        posicionVentana = window.scrollY;
    }

    function onScroll () {
        updatePos();

        if(posicionVentana>=breakPoint){
            navegador.classList.remove("open");
        }
    }
    document.addEventListener("scroll", onScroll);
})()