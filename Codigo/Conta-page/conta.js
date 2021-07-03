
// Get the modal
var modal = document.getElementById("myModal");

[...document.getElementsByClassName('myBtn')].forEach(btn => {
	btn.addEventListener('click', () => {
		modal.style.display = "block";
	})
})

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.classList.remove('show')
}


let favoritos = localStorage.getItem('favoritos');
if (!favoritos)
    favoritos = [];
else
    favoritos = JSON.parse(favoritos);

let livrosFav = livros.filter(livro => 
	favoritos.includes(livro.id)
)

livrosFav.forEach(livro => {
    let html = `<div data-id="${livro.id}" class="col-md-4 livro">
    <figure class="effect-ravi">
        <img src="${livro.img}" alt="img17" />
        <figcaption>
            <p>
                <a data-bs-toggle="collapse" data-bs-target="#myModal" class="myBtn collapsible" style="background: transparent;"><i class="fas fa-plus fa-2x"></i></a>
            </p>
        </figcaption>
    </figure>
    <div class="card" style="text-align: center; display: none">
        <div class="card-body">
            <h1 class="card-title">${livro.titulo}</h1>
            <h2 class="card-title">${livro.autor}</h2>
            <div class="card-img">
                <img src="${livro.img}" style="width: 200px;" alt="cardimage">
                <button class="Favorito">
                    <i class="fas fa-heart fa-2x"></i>
                </button>
                <div data-bs-toggle="collapse" data-bs-target="#myModal" class="collapsible">Abrir Descrição</div>
				<a style="margin-top: 15px;" href="#" class="btn btn-primary">Comprar</a>
            </div>
        </div>
    </div>`;
		
    $("#livros").append(html);
});


let atual = {
	parent: 0,
	livro: {}
};

let eventosFavoritos = localStorage.getItem('eventos-favoritos');
if (!eventosFavoritos)
    eventosFavoritos = [];
else
    eventosFavoritos = JSON.parse(eventosFavoritos);

let eventosFav = eventos.filter(evento => 
	eventosFavoritos.includes(evento.id)
)

eventosFav.forEach(evento => {
    let html = `<div data-id="${evento.id}" class="col-md-4 evento">
    <figure class="effect-ravi">
        <img id="evento" src="${evento.img}" alt="img17" />
        <figcaption>
            <p>
                <a data-bs-toggle="collapse" data-bs-target="#myModal" class="myBtn collapsible" style="background: transparent;"><i class="fas fa-plus fa-2x"></i></a>
            </p>
        </figcaption>
    </figure>`;
		
    $("#eventos").append(html);
});


$('#eventos > .evento .collapsible').on('click', function () {
    let $el = $(this);
    let parent = $el.parents('.evento');
	let id = parent.data('id');
    let evento = eventos.find(evento => evento.id == id)
		
	atual = {parent, evento}
	
	atual.livro = false

  $('#tipo').text('Local: ');

  $('#data').text('Data: ');

  $('.mData').text(evento.horario)
		
	$('.mTitulo').html(evento.evento)
	
	$('.mAutor').html(evento.localizacao)
	
	$('.mDescricao').html(evento.resumo)
})

//Separadaor


$('#livros > .livro .Favorito').on('click', function () {
    let $el = $(this);
    let parent = $el.parents('.livro');
    let id = parent.data('id');
    $el.addClass('active');

    const idx = favoritos.indexOf(id);

    favoritos.splice(idx, 1)
    
    localStorage.setItem('favoritos', JSON.stringify(favoritos))
	
	parent.hide()
})

$('#livros > .livro .collapsible').on('click', function () {
    let $el = $(this);
    let parent = $el.parents('.livro');
	let id = parent.data('id');
    let livro = livros.find(livro => livro.id == id)
		
	atual = {parent, livro}

  $('#tipo').text('Autor: ');

  $('#data').empty()

  $('.mData').text('')
		
	$('.mTitulo').html(livro.titulo)
	
	$('.mAutor').html(livro.autor)
	
	$('.mDescricao').html(livro.descricao)
})

//Unico

$('button.Favorito').on('click', function(){
  let fav = atual.livro ? favoritos : eventosFavoritos;
  let data = atual.livro ? atual.livro : atual.evento;
  let name = atual.livro ? 'favoritos' : 'eventos-favoritos';

	$('#myModal').toggle()
	
	const idx = fav.indexOf(data.id)
	
	fav.splice(idx, 1)
	
	localStorage.setItem(name, JSON.stringify(fav))
	
	atual.parent.hide()
})
