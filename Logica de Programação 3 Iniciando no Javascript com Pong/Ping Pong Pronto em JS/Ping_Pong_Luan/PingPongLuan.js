// Variaveis de caracteristicas da bolinha.
let xbolinha = 100;
let ybolinha = 50;
let diametro_bolinha = 30;

// Variavel criada para que o centro da bolinha nao seja no centro, assim ela nao entra parte para dentro ao kikar
let raio = diametro_bolinha /2;

// Variaveis de movimento bolinha.
let velocidadeXbolinha = 7;
let velocidadeYbolinha = 7;

// Variaveis da raquete.
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

// Variaveis do oponente.
let colidiu = false;
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;
let chanceDeErrar = 0;


//Variaveis do placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

// Variaveis do som do jogo.
let ponto;
let raquetada;
let trilha;


//-----------------------------------Funcoes Bolinha-------------------------------------
// Funcao criar canvas.
function setup() {
    createCanvas(600, 400);
    trilha.loop();
}

// Funcao criar e mostrar a bolinha e dada a cor para o canvas.
function mostraBolinha(){
    circle(xbolinha, ybolinha, diametro_bolinha);
}

// Criacao de movimentacao para a bolinha dentro do canvas
function movimentaBolinha(){
    xbolinha += velocidadeXbolinha;
    ybolinha += velocidadeYbolinha;
}

// Condicional criada para a bolinha se mexer se a bolinha estiver colodindo com as borda ou o teto executara.
function verificaColisao(){
  
  if (xbolinha + raio > width ||
    xbolinha - raio < 0){
    
    velocidadeXbolinha *= -1;
  }
  
  if(ybolinha  + raio > height||
    ybolinha - raio < 0){
    
    velocidadeYbolinha *= -1;
  }
}
//-----------------------------------Funcoes Raquete-------------------------------------
// Funcao criada para criar uma raquete.
function mostraRaquete(x, y){
    
    rect(x, y, raqueteComprimento, raqueteAltura)  
}

// Funcao criada para movimentar a raquete criada para cima e para baixo.

function movimentarMinhaRaquete(){
  
   if (keyIsDown(UP_ARROW)){
     yRaquete -= 10;
   }
  
   if (keyIsDown(DOWN_ARROW)){
     yRaquete += 10;
   }
  
}

// Funcao criada para verificar a colisao da bolinha com a raquete.
function verificaColisaoRaquete1(){ 
    
     if (xbolinha - raio < xRaquete + raqueteComprimento && ybolinha - raio < yRaquete +     raqueteAltura && ybolinha + raio > yRaquete){
       
       
        velocidadeXbolinha *= -1;
        raquetada.play();
     }
}


//---------------------------Funcoes Raquete Oponente------------------------------------

// Funcao criada para criar o movimento da raquete do oponente.
function numeroAleatorio(){
    return (Math.random() + 90)
}

function movimentaRaqueteOponente(){
  
  velocidadeYOponente = ybolinha - yRaqueteOponente - raqueteComprimento / 2 - numeroAleatorio();
  yRaqueteOponente += velocidadeYOponente + chanceDeErrar;
}

// Funcao criada para verificar a colisao da bolinha na raquete do oponente
function verificaColisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xbolinha,           ybolinha, raio);
  
    if (colidiu){
        velocidadeXbolinha *= -1;
        raquetada.play();
    }
}

// Funcao criada para chance de errar do oponente.
function calculaChanceDeErrar() {
    if (pontosDoOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= numeroAleatorio()){
    chanceDeErrar = numeroAleatorio()
    }
  } else {
    chanceDeErrar -= numeroAleatorio()
    if (chanceDeErrar <= 50){
    chanceDeErrar = 50
    }
  }
}

  
// ------------------------funcao criada para o placar-----------------------------------
// Inclui o placar no canvas e edição da sua estetica.
function incluiPlacar(){
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255, 140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 470, 26);
  
 }
// Faz a logica da soma dos pontos seu e do oponente.
function marcaPonto(){
 if (xbolinha > 590){
    meusPontos += 1;
     ponto.play();
  }
  if (xbolinha < 10){
    pontosDoOponente += 1;
    ponto.play();
  }
}
// ------------------------funcao criada para fazer que tudo funcione----------------------------

function preload(){
  trilha = loadSound("trilha.mp3");
  raquetada = loadSound("raquetada.mp3");
  ponto = loadSound("ponto.mp3");
}

// ------------------------funcao criada para fazer que tudo funcione--------------------
function draw() {
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaColisao();
    mostraRaquete(xRaquete, yRaquete);
    movimentarMinhaRaquete();
    verificaColisaoRaquete(xRaquete, yRaquete);
    mostraRaquete(xRaqueteOponente, yRaqueteOponente);
    movimentaRaqueteOponente();
    verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
    incluiPlacar();
    marcaPonto();
    calculaChanceDeErrar();
}
    




