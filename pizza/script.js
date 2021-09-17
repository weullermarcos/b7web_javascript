
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

        //console.log(pizzaJson[key]);

        c('.pizzaBig img').src = pizzaJson[key].img;
        c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;//preenchendo nome da pizza
        c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;

        c('.pizzaWindowArea').style.opacity = 0;
        c('.pizzaWindowArea').style.display = 'flex';
        setTimeout(()=>{c('.pizzaWindowArea').style.opacity = 1, 200});//configurando um timer pra criar um efeito de animação ao mostrar modal

    });

    c('.pizza-area').append(pizzaItem);
});

