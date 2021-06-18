let livros = [
    {
        id: 1,
        img: './',
        titulo: '',
        descricao: '',
    }
];
let favoritos = localStorage.getItem('favoritos');
if (!favoritos)
    favoritos = [];
else
    favoritos = JSON.parse(favoritos);

favoritos.forEach(id => {
    let livro = livros.find(livro => livro.id == id);

    let html = `<div class="col-md-4">
        <div class="card-content">
            <div class="card-img">
                <img src="${livro.img}" alt="">
                <span><h4>Favorito</h4></span>
            </div>
            <div class="card-desc">
                <h3>${livro.titulo}</h3>
                <p>${livro.descricao}</p>
                    <a href="#" class="btn-card">Veja Mais</a>   
            </div>
        </div>
    </div>`;
    $('#favoritos').append(html);
});