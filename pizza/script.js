
let modalQt = 1;

//função para abreviar o uso do querySelector
const c  = (elemento) => document.querySelector(elemento);
const cs = (elemento) => document.querySelectorAll(elemento);

pizzaJson.map((item, index) => {

    let pizzaItem = c('.models .pizza-item').cloneNode(true);

    pizzaItem.setAttribute('data-key', index);//setando id para cada pizza

    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;

    pizzaItem.querySelector('a').addEventListener('click', (event)=>{

        //cancela o comportamento normal do click
        event.preventDefault();

        //recuperando o id da pizza clicada
        let key = event.target.closest('.pizza-item').getAttribute('data-key');

        modalQt = 1;

        c('.pizzaBig img').src = pizzaJson[key].img;
        c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;//preenchendo nome da pizza
        c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        c('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;

        //limpando o item selecionado
        c('.pizzaInfo--size.selected').classList.remove('selected');

        //preenchendo o tamanho das pizzas
        cs('.pizzaInfo--size').forEach((size, sizeIndex) => {

            //marcando a pizza grande como selecionada
            if(sizeIndex == 2){

                size.classList.add('selected');
            }

            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        });

        c('.pizzaInfo--qt').innerHTML = modalQt;

        c('.pizzaWindowArea').style.opacity = 0;
        c('.pizzaWindowArea').style.display = 'flex';
        setTimeout(()=>{c('.pizzaWindowArea').style.opacity = 1, 200});//configurando um timer pra criar um efeito de animação ao mostrar modal

    });

    c('.pizza-area').append(pizzaItem);
});

//eventos do Modal
function closeModal(){

    c('.pizzaWindowArea').style.opacity = 0;

    //criando um timer para fazer um efeito de desvanescer
    setTimeout(()=>{
        c('.pizzaWindowArea').style.display = 'none';
    }, 500);
}

//ação de incrementar quantidade
c('.pizzaInfo--qtmenos').addEventListener('click', ()=>{

    if(modalQt > 1){

        modalQt--;
        c('.pizzaInfo--qt').innerHTML = modalQt;
    }
});

//ação de decrementar quantidade
c('.pizzaInfo--qtmais').addEventListener('click', ()=>{

    modalQt++;
    c('.pizzaInfo--qt').innerHTML = modalQt;
});

//ação de selecionar o tamanho
cs('.pizzaInfo--size').forEach((size, sizeIndex) => {

    size.addEventListener('click', (e)=>{
        c('.pizzaInfo--size.selected').classList.remove('selected');
        size.classList.add('selected');
    });
});

