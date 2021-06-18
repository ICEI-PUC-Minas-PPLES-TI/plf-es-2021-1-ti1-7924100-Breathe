let livros = [
    {
        id: 1,
        img: './img/Meditacao-para-Ceticos-Ansiosos.jpg.webp',
        titulo: 'Meditação para Céticos Ansiosos (2019), de Dan Harris e Jeff Warren',
        descricao: 'Após sofrer um ataque de pânico ao vivo na TV, diante dos milhões de espectadores que assistiam a seu programa na rede ABC News, Dan Harris se tornou um ávido meditador – e, segundo sua esposa, uma pessoa muito menos irritante. Então, ele decidiu se juntar a Jeff Warren, um professor de meditação, para ensinar como driblar os obstáculos mais comuns na hora de estabelecer uma rotina para meditar. Com uma linguagem divertida e irreverente, “Meditação para Céticos Ansiosos” é um guia completo para iniciantes, derrubando os principais mitos e equívocos que cercam a meditação.',
    },

    {
        id: 2,
        img: './img/Quando-o-Corpo-Grita-1.jpg.webp',
        titulo: 'Quando o Corpo Grita: Síndrome do Pânico (2017), de Hiltor Mombach',
        descricao: 'Em 1991, o jornalista Hiltor Mombach foi tomado por um pavor indescritível. Peregrinou por consultórios médicos, realizou vários exames do coração e nada. Não havia um diagnóstico. Por meio de sua esposa, Judith Vergara, soube que poderia estar sofrendo de síndrome do pânico. Um psiquiatra confirmou o diagnóstico. Começou ali um processo de convivência com a doença que se estende até os dias atuais. As sessões de terapia foram decisivas na compreensão da síndrome. Este livro traz o relato da descoberta da doença, seu tratamento e as formas de como é possível, em alguns casos, prevenir a crise.',
    },

    {
        id: 3,
        img: './img/Silencio.jpg.webp',
        titulo: 'Silêncio: Na Era do Ruído (2017), de Erling Kagge',
        descricao: 'Esta é uma viagem filosófica sobre a importância do silêncio. Com o barulho do trânsito, dos celulares, das pessoas ao redor e dos nossos próprios pensamentos, a quietude parece algo inalcançável. A partir de sua experiência pessoal e das ideias de sociólogos, escritores e artistas clássicos e contemporâneos, o explorador e escritor norueguês Erling Kagge reflete sobre a importância de trancar o mundo do lado de fora. Segundo ele, silêncio não significa necessariamente ausência de ruído, e sim um recurso que está ao alcance de todos nós, em qualquer lugar: no meio do deserto e do polo sul, mas também no chuveiro ou na pista de dança.',
    },

    {
        id: 4,
        img: './img/Meus-Tempos-de-Ansiedade.jpg.webp',
        titulo: 'Meus Tempos de Ansiedade: Medo, Esperança, Terror e a Busca da Paz de Espírito (2014), de Scott Stossel',
        descricao: '>No dia de seu casamento, Scott Stossel viveu os momentos mais aterrorizantes de sua vida. Tudo aconteceu nos conformes, exceto pelo fato de que ele passou a cerimônia tremendo de pavor e encharcado de suor. Na noite que deveria ser a mais importante e especial de sua vida, ele só pensava na morte, em desaparecer. A partir de sua própria vivência da ansiedade, o editor da revista “Atlantic” investiga essa doença que, se não existia como categoria diagnóstica 35 anos atrás, hoje é o mais comum distúrbio mental. Entre o relato íntimo e teorias científicas, o autor oferece uma história de todas as perspectivas, da médica à filosófica. ',
    },

    {
        id: 5,
        img: './img/Atencao-Plena.jpg.webp',
        titulo: 'Atenção Plena: Mindfulness (2011), de Mark Williams e Danny Penman',
        descricao: '“Atenção Plena: Mindfulness” e os áudios de meditação disponibilizados junto com o livro apresentam uma série de práticas simples para expandir a consciência e quebrar o ciclo de ansiedade, estresse, infelicidade e exaustão. Recomendado pelo Instituto Nacional de Excelência Clínica do Reino Unido, este método ajuda o leitor a encontrar a tranquilidade, permitindo que ele enfrente os desafios da vida com uma coragem renovada. Mais do que uma técnica de meditação, a atenção plena (ou mindfulness) é um estilo de vida que consiste em estar aberto à experiência presente, observando seus pensamentos sem julgamentos. Ao todo, são oito semanas com exercícios e meditações diárias.',
    },

    {
        id: 6,
        img: './',
        titulo: '',
        descricao: '',
    },

    {
        id: 7,
        img: './',
        titulo: '',
        descricao: '',
    },

    {
        id: 8,
        img: './',
        titulo: '',
        descricao: '',    
    },
];

let favoritos = localStorage.getItem('favoritos');;
if (!favoritos)
    favoritos = [];
else
    favoritos = JSON.parse(favoritos);

livros.forEach(livro=>{
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