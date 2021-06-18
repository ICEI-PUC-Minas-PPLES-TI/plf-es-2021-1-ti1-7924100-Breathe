onload = () => {
  exibeEventos();
};

var dbEventos = {
  eventos: [
    {
      evento: "Palestra sobre saúde mental durante pandemia",
      horario: "18:00",
      localizacao: "Youtube",
      resumo:
        "Nessa palestra será tratado a questão de como a pandemia afetou as pessoas no trabalho e como o dia a dia passou a potencializar problemas como ansiedade e depressão.",
      link: "https://www.youtube.com",
    },

    {
      evento: "Grupo de ajuda",
      horario: " 13:00",
      localizacao: "Hospital Geral César Cals",
      resumo:
        "Esse encontro foi planejado para possibilitar uma forma de apoio as pessoas como forma de conscientizalas sobre a importancia da vida.",
      link: "http://www.hgcc.ce.gov.br/#",
    },

    {
      evento: "Palestra: Depressão e Ansiedade, o que você deve saber",
      horario: "15:00",
      localizacao: "telessaude.ifes.edu.br",
      resumo:
        "Nessa palestra, Marluce Michele de Siqueira irá apresentar as questões relacionadas a ansiedade e depressão na contemporaneidade e estratégias para combatermos essas enfermidades do século 21.",
      link: "telessaude.ifes.edu.br",
    },
  ],
};

function exibeEventos() {
  let evento;
  let horario;
  let localizacao;
  let resumo;
  let link;
  let textoHTML = "";

  for (let i = 0; i < dbEventos.eventos.length; i++) {
    let dados = dbEventos.eventos[i];
    evento = dados.evento;
    horario = dados.horario;
    localizacao = dados.localizacao;
    resumo = dados.resumo;
    link = dados.link;
    textoHTML = `
      <p class="col-8">
        <strong>Evento: </strong>${evento}<br>
        <strong>Horario: </strong>${horario}<br>
        <strong>Localização: </strong>${localizacao}<br>
        <strong>Resumo: </strong>${resumo}<br>
        <strong>Link: </strong>${link}<br>
      </p>
      `;

    document.getElementById(`f${i}`).innerHTML = textoHTML;
  }
}

// Conteúdo do Site - Fim //
