
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





