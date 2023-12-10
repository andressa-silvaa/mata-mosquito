let altura;
let largura;
let vidas = 1;
let tempo = 30;
let nivel = window.location.search;
nivel = nivel.replace('?','');
let criaMosquitoTempo;

if(nivel === 'normal') {
	criaMosquitoTempo = 1500
} else if(nivel === 'dificil') {
	criaMosquitoTempo = 1000
} else if(nivel === 'chucknorris') {
	criaMosquitoTempo = 750
}


function ajustaTamanho(){
    altura = window.innerHeight;
    largura = window.innerWidth;
};
ajustaTamanho();



const cronometro = setInterval(function(){
    tempo-=1;
    if(tempo < 0){
        clearInterval(cronometro);
        clearInterval(mosca);
        window.location.href = 'vitoria.html';
    }else{
        document.getElementById('cronometro').innerHTML = tempo;
    }
    
},1000);

function posicaoAleatoria(){

    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove();
        if(vidas > 3){
            window.location.href = 'fim.html';
        }else{
            document.getElementById('V' + vidas).src = "imagens/coracao_vazio.png";
            vidas++;
        }
    };


    let posicaox = Math.floor(Math.random() * largura) - 90;
    let posicaoy = Math.floor(Math.random() * altura) - 90;

    posicaox = posicaox < 0 ? 0 : posicaox; 
    posicaoy = posicaoy < 0 ? 0 : posicaoy; 

    const mosquito = document.createElement('img');

    mosquito.src = tamanhoAleatorio();
    mosquito.className = ladoAleatorio();
    mosquito.id = 'mosquito'
    mosquito.style.left = posicaox + 'px';
    mosquito.style.top = posicaoy + 'px';
    mosquito.style.position = 'absolute';

    mosquito.onclick = function(){
        this.remove();
    };

    document.body.appendChild(mosquito);
    
};

function tamanhoAleatorio(){
    let tamanho = Math.floor(Math.random() * 3);
    switch (tamanho){
        case(0):
        return 'imagens/mosca1.png';
        case(1):
        return 'imagens/mosca2.png';
        case(2):
        return 'imagens/mosca3.png';
    };
};

function ladoAleatorio(){
    let tamanho = Math.floor(Math.random() * 2);
    switch (tamanho){
        case(0):
        return 'ladoA';
        case(1):
        return 'ladoB';

    };
};
