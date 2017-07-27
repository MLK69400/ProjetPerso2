$(document).ready(function(){

// On détermine l'ID de ton bouton
var button = document.getElementById('presentation');

// Au clic, on lance une fonction
button.addEventListener('click', function(){

  document.getElementById('main').classList.add('wrapperAnime');

  // Fait disparaitre le wrapper aprés 2secondes
  setTimeout(function(){ document.getElementById('identite').style.display='none'; }, 2000);
  // document.getElementById('menu').style.display='block';



    // $('#menu').fadeIn(2000);
    $('#menu').css('display', 'flex').hide().fadeIn(2000);


  });

});
