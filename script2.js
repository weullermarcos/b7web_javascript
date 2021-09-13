

async function inserirPosts(){

    document.getElementById('posts').innerHTML = 'Carregando...';

    let req = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'titulo de teste',
            body: 'corpo de teste',
            userId: 4
        }),
        headers: {
            'Content-Type': 'application/json',
        }
    });

    let json = await req.json();

}

async function carregarPosts(){

    let req = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await req.json();
    montarBlog(json);
}

function montarBlog(lista){

    let html = ';';

    for(let i in lista){

        html += '<h3>' + lista[i].title + '</h3>';
        html += lista[i].body + '<br/>';
        html += lista[i].body + '<hr/>';
    }

    document.getElementById('posts').innerHTML = html;

}





