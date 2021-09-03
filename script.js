
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

/*
let nome = 'Divonzir Quennehen da Silva    ';
console.log(nome.split(' '));

let n = 10;
let n1 = 10.646546546546;
let n2 = '25';
let n3 = '25.123';

console.log(n); //imprimindo um inteiro - cor diferente no console
console.log(n.toString()); //cast para string
console.log(n1.toFixed(2));
console.log(parseInt(n2)); //cast para int
console.log(parseFloat(n3)); //cast para float
*/

let lista = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'];
let lista2 = ['item 21', 'item 22', 'item 23', 'item 24', 'item 25'];

lista.pop();
lista.shift();
lista.push('item x');
lista.slice(1,1);
let resposta = lista.concat(lista2); //concatena 2 arrays
resposta.sort(); //ordena um array em ordemalfabética
resposta.reverse(); //reverte a ordem de ordenação de um array

console.log(lista.toString());
console.log(lista.join('**'));
console.log(lista.indexOf('item 3'));
console.log(lista.indexOf('item 3'));
console.log(resposta);


let listaNumeros = [45, 4, 9, 16, 25];
let resultadoNum = listaNumeros.map(function (item){
    return item * 2;
});
console.log(resultadoNum);

let outraLista = listaNumeros.filter(function (item){

    return (item < 30);
});
console.log(outraLista);

let maisUmaLista = listaNumeros.every(function (item){

    return (item > 1);
});
console.log(maisUmaLista);

let maisUmaLista2 = listaNumeros.some(function (item){

    return (item > 20);
});
console.log(maisUmaLista2);

let listaFindada = lista2.findIndex(function (item){

    return (item == 'item 230');
});
console.log(listaFindada);


let data = new Date();
data.setFullYear(2022); //altera o ano
data.setDate(5); //altera o dia
data.setDate(data.getDate() + 5); //pega a data e soma mais 5 dias

console.log(data);

console.log(Math.PI);//recupera o valor e PI
console.log(Math.round(3.56));//arredonda valores para cima ou para baixo
console.log(Math.floor(3.56));//arredonda para baixo
console.log(Math.ceil(3.56));//arredonda valores para cima
console.log(Math.min(3, 5, 6, 1, -12, -10, 1, 2, 3,4));//retorna o menor valor em uma série de números
console.log(Math.max(3, 5, 6, 1, -12, -10, 1, 2, 3,4));//retorna o maior valor em uma série de números
console.log(Math.random());//retorna um número aleatório entre 0 e 1
console.log(Math.floor(Math.random() * 100));//retorna um número aleatório entre 0 e 100


let timer;

function comecar(){

    //criando um timer que executa a função showTime a cada mil milisegundos (1 segundo)
    timer = setInterval(showTime, 1000);
}

function parar(){

    clearInterval(timer); //encerrando timer
}

function rodar(){

    setTimeout(function (){

        alert('sou um pop-up');
    }, 2000);
}

function showTime(){

    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    let txt = h + ':' + m + ':' + s;

    document.querySelector('.timer').innerHTML = txt;
}


let nome = 'Divnionzur';
let idade = 90;
let frase1 = `Meu nome é ${nome}, eu tenho ${idade} anos e ano que vem eu farei ${idade + 1} anos`;
console.log(frase1);






