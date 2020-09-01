
// Muda o texto do html da classe titulo.
var titulo = document.querySelector(".titulo");
		
titulo.textContent = "Aparecida Nutricionista";

// Extrair os dados da tabela e realizar o calculo do IMC dos valores de cada paciente do HTML

var pacientes = document.querySelectorAll(".paciente");


for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];
        
    var tdPeso = paciente.querySelector(".info-peso");// acessando a classe do td que contem o textContent
    var peso = tdPeso.textContent; // Pegar o conteudo de dentro do TD

    var tdAltura = paciente.querySelector(".info-altura"); // acessando a classe do td que contem o textContent
    var altura = tdAltura.textContent; // Pegar o conteudo de dentro do TD



    // Adicionando o valor do calculo IMC na tabela

    var tdImc = paciente.querySelector(".info-imc"); // acessando o tdImc

    /* Antes de calcular o IMC, faremos uma pequena verificação das duas variáveis: se a primeira (alturaEhValida) 
    for verdadeira E a segunda (pesoEhValido) também, o IMC será calculado*/

    var pesoEhValido = validaPeso(peso); 
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!"; // Adicionando o valor invalido na tabela pois a verificação deu True
        paciente.classList.add("paciente-invalido"); // Criado esta classe para manipular o estilo no CSS no caso for false pintar a linha da tabela de vermelho.
    }

    if (!alturaEhValida){
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!"; // Adicionando o valor invalido pois a verificação deu True
        paciente.classList.add("paciente-invalido"); // Criado esta classe para manipular o estilo no CSS no caso for false pintar a linha da tabela de vermelho.
    }

    if (alturaEhValida && pesoEhValido){
        var imc = calculaImc(peso,altura); // Realizando o calculo
        tdImc.textContent = imc; // Adicionando o valor do calculo na tabela do html
    }else {
        tdImc.textContent = "Altura e/ou peso inválidos!"
        paciente.classList.add("paciente-invalido"); // Criado esta classe no js para manipular o estilo no CSS no caso for false pintar a linha da tabela de vermelho.
    }
}


// Função criada para calcular o imc.

function calculaImc(peso, altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso(peso){

    if(peso > 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura > 0 && altura <= 3.00){
        return true;
    }else{
        return false;
    }

}