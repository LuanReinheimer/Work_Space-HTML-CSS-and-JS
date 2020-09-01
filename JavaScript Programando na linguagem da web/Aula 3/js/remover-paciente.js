var paciente =  document.querySelectorAll(".pacientes");

var tabela = document.querySelector("#tabela-pacientes"); //  Selecionando apenas o que esta na tabela pacientes para remover ao  dar double click.

tabela.addEventListener("dblclick", function(event){ // colocando um escutador de eventos quando for feito um clique duplo representado pelo dblclick.
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);

});