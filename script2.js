
function carregarPosts(){

    //montando uma requisição
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function (resultado){

            return resultado.json();
        })
        .then(function (json){

            //exibe na div a quantidade dos posts
            document.getElementById('posts').innerHTML = `${json.length} posts`;
        })
        .catch(function (error){

            console.log('deu problema');
        });

}





