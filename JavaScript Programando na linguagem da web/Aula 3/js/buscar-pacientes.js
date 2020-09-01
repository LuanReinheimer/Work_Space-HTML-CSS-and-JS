// Fazendo uma requisição de dados uiltilizando a técnica do AJAX em js.

var botaoAdicionar = document.querySelector("#buscar-pacientes"); // Buscar o botão no HTML para o JS.

botaoAdicionar.addEventListener("click", function() { // Colocar um escutador com um evento de click. 
    
    var xhr = new XMLHttpRequest(); // Um objeto do JS de realizar requisiçoes em XML.

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); //  Função que abre a conexão do endereço que queremos fazer a requisição do tipo GET.

    xhr.addEventListener("load", function() { //  Função que faz carregar "exibir" o texto da resposta da requisição.
    var erroAjax = document.querySelector("#erro-ajax");
    if (xhr.status == 200) {
        erroAjax.classList.add("invisivel");
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);

        pacientes.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente);
        });
    } else {
        erroAjax.classList.remove("invisivel");
    }
});

xhr.send();
});