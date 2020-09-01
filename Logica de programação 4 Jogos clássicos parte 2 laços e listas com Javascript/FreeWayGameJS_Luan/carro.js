//Funcoes do carro-----------------------------------------------------------------------
// Quantidade de carros.
let xCarros = [600, 600, 600, 600, 600, 600];

// Posisao dos carros.
let yCarros = [40, 96, 150, 210, 270, 318];
let comprimentoCarro = 50;
let alturaCarro = 40;

// Velocidade dos carros
function numeroAleatorio(){
    return (Math.random() * 6 + 1 )
}
let velocidadeCarros = [numeroAleatorio(), numeroAleatorio(), numeroAleatorio(), numeroAleatorio(), numeroAleatorio(), numeroAleatorio()];

// Mostrar carros no canvas.
function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
  }
}
  
// Velocidade dos carros.
function movimentaCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];

  }
}
// Funcao criada para que o carro fique passando na rodovia.
function voltaPosicaoInicialDoCarro(){
    for(let i = 0; i < imagemCarros.length; i = i + 1){
        if(passouTodaATela(xCarros[i])){
                xCarros[i] = 600;
        }
    }
}

function passouTodaATela(xCarro){
    return xCarro < - 50;
}
