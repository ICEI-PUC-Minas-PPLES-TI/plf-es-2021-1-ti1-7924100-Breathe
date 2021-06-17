<script>
//Espero o DOM ser carregado!
$(function() {
   //Detecto o clique no botão favoriteLink
   $('body').on('click', '.favoriteLink', function () {
       var objClicado = $(this); //Guardo o objeto em uma variavel porque ele não vai ficar disponível dentro do success do ajax.
       // recuperando qual é a url que tá dentro do link
       var url = objClicado.attr('href');
       var id = objClicado.attr('id');
       //Efetuando a chamada AJAX
       $.ajax({
           url : url,
           dataType: 'JSON',
           type: 'GET',
           beforeSend: function () {
              //Aqui vc pode colocar para mostrar alguma coisa enquanto carrega..
              objClicado.addClass("btn-favorite-loading");
           },
           success : function (retorno) {
               objClicado.removeClass("btn-favorite-loading");
               if(retorno.favorite == 1) {
                   objClicado.attr('href', 'SITE.COM/post/favoritar/'+id +'/remover');
                   objClicado.html('Remover');
               } else {
                  objClicado.attr('href', 'SITE.COM/post/favoritar/'+id);
                  objClicado.html('Favoritar');
               }
           },
           error : function (a,b,c) {
                objClicado.removeClass("btn-favorite-loading");
               alert('Erro: '+a['status']+' '+c);
           }
       });
       return false;
   });
};
</script>