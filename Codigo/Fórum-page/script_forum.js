let txt = 'Breathe - Todos os direitos reservados - 2021';
let img = 'img/logo2.png';
let dropdownHTML = `<button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Opções</button>
<ul class="dropdown-menu">
    <button class="btn btn-primary has-icon btn-block" type="button" data-toggle="modal" data-target="#threadModal">
        Nova Discussão
    </button>
    <a href="javascript:void(0)" class="nav-link nav-link-faded has-icon active">Todos os Tópicos</a>
    <a href="javascript:void(0)" class="nav-link nav-link-faded has-icon">Populares desta semana</a>
    <a href="javascript:void(0)" class="nav-link nav-link-faded has-icon">Populares</a>
    <a href="javascript:void(0)" class="nav-link nav-link-faded has-icon">Resolvidos</a>
    <a href="javascript:void(0)" class="nav-link nav-link-faded has-icon">Não resolvidos</a>
    <a href="javascript:void(0)" class="nav-link nav-link-faded has-icon">Sem resposta</a>
    <a href="biblioteca.html"><button class="btn btn-primary has-icon btn-block" type="button" data-toggle="modal" data-target="#threadModal">Biblioteca</button></a>
</ul>`;
let footerHTML = `<div class="row">
<div class="col-9 col-lg-11 footer_area">
    ${txt}
</div>
<div class="col-3 col-lg-1">
    <img src="${img}">
</div>
</div>`;
document.querySelector('.footer').innerHTML = footerHTML;
document.querySelector('.dropdown').innerHTML = dropdownHTML;