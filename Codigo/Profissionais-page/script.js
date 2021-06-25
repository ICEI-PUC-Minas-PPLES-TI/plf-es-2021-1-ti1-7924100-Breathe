let txtHTML = '';

for (let i=0; i<8; i++) {
    txtHTML += `<div class="col-sm-12 col-lg-6"><div class="card" style="text-align: center;"><div class="card-body"><h5 class="card-title">Nome do profissional</h5><img src="img/200x200.gif" alt="cardimage" ><p class="card-text">Breve texto evidenciando a tragetoria do profissional e suas especialidades além de mostrar formas de ajudar os usuários<br><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span> X Recomendações</p><a href="#" class="btn btn-primary">Contactar</a></div></div></div>`
}

txtHTML += `<div style="text-align: center;"><a href="#" class="previous">&laquo; Anterior</a><a href="#" class="next">Próximo &raquo;</a></div>`;

document.getElementById('conteudo').innerHTML = txtHTML;