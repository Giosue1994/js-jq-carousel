$(document).ready(
  function() {

    // quando clicco visualizzo l'immagine successiva
    $('.next').click(
      function () {

        immagineSuccessiva();

      }
    );

    // quando clicco visualizzo l'immagine precedente
    $('.prev').click(
      function () {

        immaginePrecedente();

      }
    );
  }
);

// tolgo la classe 'active' da un elemento e la passo
// al successivo. Lo stesso procedimento deve essere eseguito dai pallini.
function immagineSuccessiva() {

  // creo una variabile che contiene la classe 'active' relativa alla visualizzazione dell'elemento
  var elementoCorrente = $('.images img.active');
  var pallinoCorrente = $('.nav i.active');
  // rimuovo la classe che rende visibile l'elemento
  elementoCorrente.removeClass('active');
  pallinoCorrente.removeClass('active');

  // se l'elemento corrente ha classe 'last' aggiungo la classe 'active' al primo elemento
  if (elementoCorrente.hasClass('last')) {
    $('.images img.first').addClass('active');
  } // altrimenti, se non ha classe 'last', all'elemento successivo aggiungo la classe 'active'
  else {
    elementoCorrente.next('img').addClass('active');
  }

  // se il pallino corrente ha classe 'last' aggiungo la classe 'active' al primo pallino
  if (pallinoCorrente.hasClass('last')) {
    $('.nav i.first').addClass('active');
  } // altrimenti, se non ha classe 'last', al pallino successivo aggiungo la classe 'active'
  else {
    pallinoCorrente.next('i').addClass('active');
  }
}

// tolgo la classe 'active' da un elemento e la passo
// al precedente. Lo stesso procedimento deve essere eseguito dai pallini.
function immaginePrecedente() {

  // creo una variabile che contiene la classe 'active' relativa alla visualizzazione dell'elemento
  var elementoCorrente = $('.images img.active');
  var pallinoCorrente = $('.nav i.active');
  // rimuovo la classe che rende visibile l'elemento
  elementoCorrente.removeClass('active');
  pallinoCorrente.removeClass('active');

  // se l'elemento corrente ha classe 'first' aggiungo la classe 'active' all'ultimo pallino
  if (elementoCorrente.hasClass('first')) {
    $('.images img.last').addClass('active');
  } // altrimenti, se non ha classe 'first', all'elemento precedente aggiungo la classe 'active'
  else {
    elementoCorrente.prev('img').addClass('active');
  }

  // se il pallino corrente ha classe 'first' aggiungo la classe 'active' all'ultimo pallino
  if (pallinoCorrente.hasClass('first')) {
    $('.nav i.last').addClass('active');
  } // altrimenti, se non ha classe 'first', al pallino precedente aggiungo la classe 'active'
  else {
    pallinoCorrente.prev('i').addClass('active');
  }
}
