// Comportamento do evento ao clickar do botão adicionar.

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) { // Função do JS de adiciona um escutador de eventos, no caso no evento de click, com uma função anonima para retornar o evento ao clicar.
    event.preventDefault(); // Função para que previne o comportamento padrão de recarregar a pagina  ao clickar no botão de adicionar.
    var form = document.querySelector("#form-adiciona");
// Primeiro pegamos os dados do form.
    var paciente = obtemPacienteDoFormulario(form);

// Validação se o peso e altura são validas.

    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        
        return;
    }

    adicionaPacienteNaTabela(paciente);
// função reset() para limpar os campos após preenmcer e adicionar dados.
    form.reset()
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = ""
});

function adicionaPacienteNaTabela(paciente) {
    // Criamos os td's e o Tr no js com a função.
    var pacienteTr = montaTr(paciente);
    // Função de colocar como filho o pacienteTr do pai principal que no caso agora é o tbody e adicionando o paciente na tabela do html.
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

// Criada a função para obter os dados do form e criando um objeto paciente com suas caracteristicas.
function obtemPacienteDoFormulario(form){
    
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

// criamos o Tr no js com a função.
// Função de criar um novo elemento no HTML depois de adicionar
function montaTr(paciente){
    var pacienteTr = document.createElement("tr"); // Criando a Tr. 
    pacienteTr.classList.add("paciente"); // Coloca uma classe na Tr criada.
// Colocamos os td's criados pela funcoa montaTd() dentro da Tr.
    pacienteTr.appendChild(montaTd(paciente.nome, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

// criamos o Td no js com esta função.
function montaTd(dado, classe) {
    var td = document.createElement("td");
// Preenchemos os Td's com os valores pego do form
    td.textContent = dado;
    td.classList.add(classe)

    return td;
}


function validaPaciente(paciente) {

    var erros = [];
    
    if( paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }
    if(!validaPeso(paciente.peso)){
        erros.push("Peso é invalido!")
    }
    if(!validaAltura(paciente.altura)){
        erros.push("Altura é invalida!")
    }
    if( paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }
    if( paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }
    if( paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }
        
    return erros;
}


function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = ""
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
  

