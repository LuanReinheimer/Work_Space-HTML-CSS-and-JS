
//Setup------------------------------------------------------------------------------

function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
  
}

//Funcao criada para fazer que tudo funcione---------------------------------------------

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
  
}