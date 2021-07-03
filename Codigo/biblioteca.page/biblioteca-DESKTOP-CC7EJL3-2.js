let favoritos = localStorage.getItem('favoritos');;
if (!favoritos)
    favoritos = [];
else
    favoritos = JSON.parse(favoritos);

livros.forEach(livro => {
    let html = `<div data-id="${livro.id}" class="col-sm-6 livro">
    <div class="card" style="text-align: center;">
        <div class="card-body">
            <h1 class="card-title">${livro.titulo}</h1>
            <h2 class="card-title">${livro.autor}</h2>
            <div class="card-img">
                <img src="${livro.img}" style="width: 200px;" alt="cardimage">
                <button class="Favorito">
                    <i class="fas fa-heart fa-2x"></i>
                </button>
                <div data-bs-toggle="collapse" data-bs-target="#content_${livro.id}" class="collapsible">Descrição</div>
                <div id="content_${livro.id}" class="content">
                    <p class="card-text">
                        ${livro.descricao}
                        <br>
                    </p>
                </div>
				<a style="margin-top: 15px;" href="#" class="btn btn-primary">Comprar</a>
            </div>
        </div>
    </div>`;
    $("#livros").append(html);
});
$('#livros > .livro .Favorito').on('click', function () {
    let $el = $(this);
    let parent = $el.parents('.livro');
    let id = parent.data('id');
    $el.addClass('active');

    const idx = favoritos.indexOf(id);

    if(idx > -1)
        favoritos.splice(idx, 1)
    else
        favoritos.push(id)
    
    localStorage.setItem('favoritos', JSON.stringify(favoritos))
})