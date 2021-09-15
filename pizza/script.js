
//função para abreviar o uso do querySelector
const c  = (elemento) => document.querySelector(elemento);
const cs = (elemento) => document.querySelectorAll(elemento);

pizzaJson.map((item, index) => {

    let pizzaItem = c('.models .pizza-item').cloneNode(true);
    c('.pizza-area').append(pizzaItem);
});

