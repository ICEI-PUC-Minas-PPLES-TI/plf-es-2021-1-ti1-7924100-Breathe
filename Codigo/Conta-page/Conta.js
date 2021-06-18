let livros = [
    {
        id: 1,
        img: './img/Meditacao-para-Ceticos-Ansiosos.jpg.webp',
        titulo: 'Meditação para Céticos Ansiosos (2019), de Dan Harris e Jeff Warren',
        descricao: 'Após sofrer um ataque de pânico ao vivo na TV, diante dos milhões de espectadores que assistiam a seu programa na rede ABC News, Dan Harris se tornou um ávido meditador – e, segundo sua esposa, uma pessoa muito menos irritante. Então, ele decidiu se juntar a Jeff Warren, um professor de meditação, para ensinar como driblar os obstáculos mais comuns na hora de estabelecer uma rotina para meditar. Com uma linguagem divertida e irreverente, “Meditação para Céticos Ansiosos” é um guia completo para iniciantes, derrubando os principais mitos e equívocos que cercam a meditação.',
    },
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
                <a><i class="fas fa-heart fa-2x"></i></a>
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