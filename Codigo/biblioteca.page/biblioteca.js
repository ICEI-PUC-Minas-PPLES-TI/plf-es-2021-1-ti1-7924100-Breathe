let favoritos = localStorage.getItem('favoritos');;
if (!favoritos)
    favoritos = [];
else
    favoritos = JSON.parse(favoritos);

livros.forEach(livro => {
    let html = `
    <div data-id="${livro.id}"class="col-12 no-padding lib-item livro" data-category="ui">
    <div class="lib-panel">
      <div class="row box-shadow">
        <div class="col-md-3">
          <img class="lib-img" src="${livro.img}">
        </div>
        <div class="col-md-9">
          <div class="lib-row lib-header">
          <button class="Favorito">
          <i class="fas fa-heart fa-2x"></i>
        </button>
            <h1>${livro.titulo}</h1>
            <h2>Autor: ${livro.autor}</h2>
          </div>
          <div class="lib-row lib-desc">
            ${livro.descricao}
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
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
