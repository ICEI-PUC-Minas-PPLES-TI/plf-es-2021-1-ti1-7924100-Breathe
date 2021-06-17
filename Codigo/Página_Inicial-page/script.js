let texto = 'Breathe - Todos os direitos reservados - 2021';
let imagem = 'img/logo2.png';
let txtHTML = `<div class="row"><div class="col-9 col-lg-11 footer_area">${texto}</div><div class="col-3 col-lg-1"><img src="${imagem}"></div></div>`;
document.querySelector('.footer').innerHTML = txtHTML;