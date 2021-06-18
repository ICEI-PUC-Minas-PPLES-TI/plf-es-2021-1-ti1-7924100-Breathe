let livros = [
    {
        id: 1,
        img: './img/Meditacao-para-Ceticos-Ansiosos.jpg.webp',
        titulo: 'Meditação para Céticos Ansiosos (2019), de Dan Harris e Jeff Warren',
        descricao: 'Após sofrer um ataque de pânico ao vivo na TV, diante dos milhões de espectadores que assistiam a seu programa na rede ABC News, Dan Harris se tornou um ávido meditador – e, segundo sua esposa, uma pessoa muito menos irritante. Então, ele decidiu se juntar a Jeff Warren, um professor de meditação, para ensinar como driblar os obstáculos mais comuns na hora de estabelecer uma rotina para meditar. Com uma linguagem divertida e irreverente, “Meditação para Céticos Ansiosos” é um guia completo para iniciantes, derrubando os principais mitos e equívocos que cercam a meditação.',

        id: 2,
        img: './img/Quando-o-Corpo-Grita-1.jpg.webp',
        titulo: 'Quando o Corpo Grita: Síndrome do Pânico (2017), de Hiltor Mombach',
        descricao: 'Em 1991, o jornalista Hiltor Mombach foi tomado por um pavor indescritível. Peregrinou por consultórios médicos, realizou vários exames do coração e nada. Não havia um diagnóstico. Por meio de sua esposa, Judith Vergara, soube que poderia estar sofrendo de síndrome do pânico. Um psiquiatra confirmou o diagnóstico. Começou ali um processo de convivência com a doença que se estende até os dias atuais. As sessões de terapia foram decisivas na compreensão da síndrome. Este livro traz o relato da descoberta da doença, seu tratamento e as formas de como é possível, em alguns casos, prevenir a crise.',
    
        id: 3,
        img: './img/Silencio.jpg.webp',
        titulo: 'Silêncio: Na Era do Ruído (2017), de Erling Kagge',
        descricao: 'Esta é uma viagem filosófica sobre a importância do silêncio. Com o barulho do trânsito, dos celulares, das pessoas ao redor e dos nossos próprios pensamentos, a quietude parece algo inalcançável. A partir de sua experiência pessoal e das ideias de sociólogos, escritores e artistas clássicos e contemporâneos, o explorador e escritor norueguês Erling Kagge reflete sobre a importância de trancar o mundo do lado de fora. Segundo ele, silêncio não significa necessariamente ausência de ruído, e sim um recurso que está ao alcance de todos nós, em qualquer lugar: no meio do deserto e do polo sul, mas também no chuveiro ou na pista de dança.',

        id: 4,
        img: './',
        titulo: '',
        descricao: '',

        id: 5,
        img: './',
        titulo: '',
        descricao: '',

        id: 6,
        img: './',
        titulo: '',
        descricao: '',

        id: 7,
        img: './',
        titulo: '',
        descricao: '',

        id: 8,
        img: './',
        titulo: '',
        descricao: '',    
    }
];

let favoritos = localStorage.getItem('favoritos');;
if (!favoritos)
    favoritos = [];
else
    favoritos = JSON.parse(favoritos);

livros.forEach(livro => {
    let html = `<div data-id="${livro.id}" class="col-sm-6 livro">
    <div class="card" style="text-align: center;">
    <div class="card-body">
        <h5 class="card-title">${livro.titulo}</h5>
        <div class="card-img">
        <img src="${livro.img}" style="width: 200px;" alt="cardimage">
        <button class="Favorito">
            <i class="fas fa-heart fa-2x"></i>
        </button>
        </div>
        <p class="card-text">
         ${livro.descricao}
         <br>
        </p>
        <a href="#" class="btn btn-primary">Comprar</a>
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

    favoritos.push(id)

    localStorage.setItem('favoritos', JSON.stringify(favoritos))
})