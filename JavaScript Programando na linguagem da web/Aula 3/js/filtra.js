var campoFiltro = document.querySelector("#filtrar-tabela");

// Função do filtro por nome
campoFiltro.addEventListener("input", function() { // escuta o que foi digitado como parametro do filtro
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0){
        for (var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            // Pesquisar no filtro apenas pelas primeira letras dos nomes adicionado na tabela.
            var expressao = new RegExp(this.value,"i");
            if (!expressao.test(nome)){
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});