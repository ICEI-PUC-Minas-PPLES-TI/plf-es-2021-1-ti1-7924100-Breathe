const API_KEY = "2d208c8635be42e6a81353d728949a06";

executaPesquisa();

function exibeNoticias() {
  let divTela = document.getElementById("texto_central");
  let texto = "";

  let dados = JSON.parse(this.responseText);
  for (i = 0; i < 7; i++) {
    let noticia = dados.articles[i];
    let data = new Date(noticia.publishedAt);

    texto =
      texto +
      `
        <div class="texto-noticia"> 
          <div class="row">
            <div class="card${i} card" style="width: 45rem;">
                <div class="row">
                    <div class="col-4 imagem"><img src="${noticia.urlToImage}" class="card-img-top" alt="...">
                    </div>

                    <div class="card-body col-8">
                        <h5 class="card-title titulo">${noticia.title}</h5>
                        <p class="card-text txt">${noticia.content}</p>
                        <a href="${noticia.url}"><button type="button" class="btn btn-outline-primary">Leia mais...</button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>            
        `;
  }

  divTela.innerHTML = texto;
}

function executaPesquisa() {
  let query = "Ansiedade";

  let xhr = new XMLHttpRequest();
  xhr.onload = exibeNoticias;
  xhr.open(
    "GET",
    `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`
  );
  xhr.send();
}
