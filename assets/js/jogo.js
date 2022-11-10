// Armazena total de pontos de uma partida
var totalPontos = 0;

const estilosBotoes = ['', 'btnBolaFormatoA', 'btnBolaFormatoB', 'btnBolaFormatoC', 'btnBolaFormatoD'];

async function iniciar() {
    totalPontos = 0;
    const timer = ms => new Promise(res => setTimeout(res, ms));

    while (true) {
        await timer(2000);
        injetar();
    }

}

// Gera números inteiros aleatoriamente entre o intervalo passado como parâmetro (min, max)
function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function pontuar(pontos) {
    let divPontuacao = document.getElementById('divPontuacao');
    totalPontos = totalPontos + pontos;
    divPontuacao.innerText = totalPontos;
    setConteudoTabuleiro("");
}

function injetar() {

    let posicaoVertical = gerarNumeroAleatorio(1, 90);
    let posicaoHorizontal = gerarNumeroAleatorio(1, 90);

    let pontos = gerarNumeroAleatorio(-10, 10);

    let posicaoEstilo = gerarNumeroAleatorio(1, 5);
    let seletorEstilo =  estilosBotoes[posicaoEstilo];

    setConteudoTabuleiro("<button class='"+seletorEstilo+"' style='position:relative;top:"+posicaoVertical+"%;left:"+posicaoHorizontal+"%;' onclick='pontuar("+pontos+")'>"+pontos+"</button>");
}

function setConteudoTabuleiro(conteudo) {
    let tabuleiro = document.getElementById('divTabuleiro');
    tabuleiro.innerHTML = conteudo;
}