onload = () => {
  exibeEventos();
};

let favoritos = localStorage.getItem('eventos-favoritos');
if (!favoritos)
    favoritos = [];
else
    favoritos = JSON.parse(favoritos);

function exibeEventos() {
  let evento;
  let horario;
  let localizacao;
  let resumo;
  let link;
  let textoHTML = "";

  for (let i = 0; i < eventos.length; i++) {
    let dados = eventos[i];

    let {id, evento, horario, localizacao, resumo, link} = dados;

    textoHTML = `
    <div data-id="${id}"  class="row anuncio evento">
        <img class="col-4" src="${img}" alt="foto 1">
        <div class="col-8">
            <p class="col-8">
                <strong>Evento: </strong>${evento}<br>
                <strong>Horario: </strong>${horario}<br>
                <strong>Localização: </strong>${localizacao}<br>
                <strong>Resumo: </strong>${resumo}<br>
                <strong>Link: </strong>${link}<br>
            </p>
            <button class="Favorito">
                  <i class="fas fa-heart fa-2x"></i>
            </button>
        </div>
    </div>`;

    $('#eventos').append(textoHTML)
  }

  $('#eventos .evento .Favorito').on('click', function(){
    let $el = $(this);
    let parent = $el.parents('.evento');
    let id = parent.data('id');
    $el.addClass('active');

    const idx = favoritos.indexOf(id);

    if(idx > -1)
        favoritos.splice(idx, 1)
    else
        favoritos.push(id)
    
    localStorage.setItem('eventos-favoritos', JSON.stringify(favoritos))
  })
}

// Conteúdo do Site - Fim //
