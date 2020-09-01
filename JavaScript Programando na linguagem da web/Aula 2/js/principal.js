
// Muda o texto do html da classe titulo.
var titulo = document.querySelector(".titulo");
		
titulo.textContent = "Aparecida Nutricionista";

// Extrair os dados da tabela e realizar o calculo do IMC dos valores de cada paciente do HTML

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");// acessando a classe do td que contem o textContent
var peso = tdPeso.textContent; // Pegar o conteudo de dentro do TD

var tdAltura = paciente.querySelector(".info-altura"); // acessando a classe do td que contem o textContent
var altura = tdAltura.textContent; // Pegar o conteudo de dentro do TD



// Adicionando o valor do calculo IMC na tabela

var tdImc = paciente.querySelector(".info-imc"); // acessando o tdImc

/* Antes de calcular o IMC, faremos uma pequena verificação das duas variáveis: se a primeira (alturaEhValida) 
for verdadeira E a segunda (pesoEhValido) também, o IMC será calculado*/

var pesoEhValido = true; // Iniciando que o peso é válido
var alturaEhValida = true; // Iniciando que a altura é válida

if (peso <= 0 || peso >= 1000) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!"; // Adicionando o valor invalido na tabela pois a verificação deu True
}

if (altura <= 0 || altura >= 3.00){
    console.log("Altura inválida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida!"; // Adicionando o valor invalido pois a verificação deu True
}

if (alturaEhValida && pesoEhValido){
    var imc = peso / (altura * altura); // Realizando o calculo
    tdImc.textContent = imc; // Adicionando o valor do calculo na tabela do html
}else {
    tdImc.textContent = "Altura e/ou peso inválidos!"
}


