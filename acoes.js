$(document).ready(function() {
    $("#minha-div").hide();
    $("#menu-btn").click(function() {
        $("#minha-div").animate({width: "toggle"}, 300); // Altera a largura da div com animação de 300 milissegundos
    });
})