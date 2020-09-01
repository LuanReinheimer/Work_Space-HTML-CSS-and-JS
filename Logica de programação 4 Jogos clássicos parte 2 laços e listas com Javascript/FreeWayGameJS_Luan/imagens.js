//Carregamento das imagens e sons no jogo--------------------------------------------------

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

//Variaveis Sons

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
    imagemDaEstrada = loadImage("Imagens/estrada.png");
    imagemDoAtor = loadImage("Imagens/ator-1.png");
    imagemCarro = loadImage("Imagens/carro-1.png")
    imagemCarro2 = loadImage("Imagens/carro-2.png");
    imagemCarro3 = loadImage("Imagens/carro-3.png");
    imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2,         imagemCarro3];
//carregando os sons.
    somDaTrilha = loadSound("sons/trilha.mp3");
    somDaColisao = loadSound("sons/colidiu.mp3")
    somDoPonto= loadSound("sons/pontos.wav");
}