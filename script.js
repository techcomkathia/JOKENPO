const opcoes = {
    1 : { nome: 'pedra', img:'img/pedra.png', pedra: 'EMPATE', papel : 'PERDEU', tesoura: 'GANHOU'},
    2 : { nome: 'papel', img:'img/papel.png', pedra: 'GANHOU', papel : 'EMPATE', tesoura: 'PERDEU'},
    3 : { nome: 'tesoura', img:'img/tesoura.png', pedra: 'PERDEU', papel : 'GANHOU', tesoura: 'EMPATE'}
}

//seleção dos objetos do document
//imagem e texto da escolha do usuário
let imgJogador = document.getElementById('imgUser')
let pJogador =  document.getElementById('escolhaUsuario')

//imagem e texto da escolha do computador
let imgComputador = document.getElementById('imgComput')
let pComputador =  document.getElementById('escolhaComputador')

//resultado final
let resultadoFinal = document.getElementById('resultado')

//contagem dos pontos no document
let contagemPontosComputador = document.getElementById('pontosComputador')
let contagemPontosJogador = document.getElementById('pontosUsuario')

//BOTÕES JOGADA USUÁRIO
let btnPedra = document.getElementsByTagName('button')[0]
let btnPapel = document.getElementsByTagName('button')[1]
let btnTesoura = document.getElementsByTagName('button')[2]

//variáveis globais para escolha do usuário e do computador
let escolhaJogador= {}
let escolhaComputador= {}

//variáveis globais para pontuação dos jogadores
let pontosJogador = 0
let pontosComputador = 0

function escolherJogada(num){
    return opcoes[num]
}

function montarJogadas(numJogador){
    let numComp = Math.floor((Math.random()*3)+1)
    escolhaJogador = escolherJogada(numJogador)
    escolhaComputador = escolherJogada(numComp)
}

function avaliarGanhador(){

    if( escolhaJogador[escolhaComputador.nome] == 'GANHOU'){
        pontosJogador += 1
    }
    else if (escolhaJogador[escolhaComputador.nome] == 'PERDEU'){
        pontosComputador += 1 
    }
}

function montarTela(){
    imgJogador.src= escolhaJogador.img
    imgComputador.src = escolhaComputador.img

    imgJogador.alt= escolhaJogador.nome
    imgComputador.alt = escolhaComputador.nome

    pJogador.innerHTML = ` Você escolheu ${escolhaJogador.nome}`
    pComputador.innerHTML = `O Computador escolheu ${escolhaComputador.nome}`

    contagemPontosComputador.innerHTML = pontosComputador
    contagemPontosJogador.innerHTML = pontosJogador

    resultadoFinal.innerHTML= escolhaJogador[escolhaComputador.nome]

    //adicção da classe para manipulação do style
    switch(escolhaJogador[escolhaComputador.nome]){
        case 'GANHOU':
            resultadoFinal.classList = 'ganhou'
            break
        case 'PERDEU':
            resultadoFinal.classList = 'perdeu'
            break
        default:
            resultadoFinal.classList = 'empatou'
            break
    }

}

function jogar(num){
    montarJogadas(num)
    avaliarGanhador()
    montarTela()
}

//adição do escutadores de eventos aos botões, com o evento click

btnPapel.addEventListener('click', ()=> jogar(2))
btnPedra.addEventListener('click', ()=> jogar(1))
btnTesoura.addEventListener('click', ()=> jogar(3))