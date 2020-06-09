$(document).ready(
  function() {

    // quando clicco visualizzo l'immagine successiva
    $('.next').click(
      function () {

        immagineSuccessiva();

      }
    );
  }
);

//quando premo sull'icona 'next' l'immagine deve scorrere
// a destra, togliendo la classe 'active' dall'immagine iniziale a passandola
// alla successiva. Lo stesso procedimento deve essere eseguito dai pallini.
function immagineSuccessiva() {

  // creo una variabile che contiene la classe dell'immagine visualizzata su schermo
  var immagineCorrente = $('.images img.active');
  // rimuovo la classe che rende visibile l'immagine
  immagineCorrente.removeClass('active');

  // se l'immagine corrente ha classe 'last' aggiungo la classe 'active' alla prima immagine
  if (immagineCorrente.hasClass('last')) {
    $('.images img.first').addClass('active');
  } // altrimenti all'immagine successiva aggiungo la classe 'active'
    else {
      immagineCorrente.next('img').addClass('active');
    }
}
