
document.getElementById('titulo').innerHTML = 'Tudo certo'; //altera um elemento da tela

document.write('escrevendo...'); //escreve na tela

//adicionando um evento para monitorar o scroll a tela
window.addEventListener('scroll', verificarScroll);

function verde(){

    document.querySelector('#nome').classList.remove('vermelho');
    document.querySelector('#nome').classList.remove('azul');
    document.querySelector('#nome').classList.add('verde');
}
function vermelho(){

    document.querySelector('#nome').classList.remove('verde');
    document.querySelector('#nome').classList.remove('azul');
    document.querySelector('#nome').classList.add('vermelho');
}
function azul(){

    document.querySelector('#nome').classList.remove('vermelho');
    document.querySelector('#nome').classList.remove('verde');
    document.querySelector('#nome').classList.add('azul');
}

function trocar(){

    if(document.querySelector('#btnTrocar').classList.contains('preto')){

        document.querySelector('#btnTrocar').classList.remove('preto')
        document.querySelector('#btnTrocar').classList.add('verde');
    }
    else{

        document.querySelector('#btnTrocar').classList.remove('verde')
        document.querySelector('#btnTrocar').classList.add('preto');
    }
}

function trocaAimal(animal){

    document.querySelector('.animal').setAttribute('src', 'img/'+animal+'.jpg');
}

function subirTela(){

    //função pra fazer o scroll na tela
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
}

function verificarScroll(){

    if(window.scrollY === 0){

        //ocultando o botão de scroll se estiver no topo
        document.querySelector('.scrollButton').style.display = 'none';
    }
    else{

        document.querySelector('.scrollButton').style.display = 'block';
    }
}
