document.addEventListener("DOMContentLoaded", function () {
    var btnScrollToTop = document.getElementById("btnScrollToTop");

    // Mostrar ou ocultar o botão dependendo do scroll da página
    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            btnScrollToTop.style.display = "block";
        } else {
            btnScrollToTop.style.display = "none";
        }
    });

    // Rolagem suave ao topo da página
    btnScrollToTop.addEventListener("click", function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});
