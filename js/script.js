$(document).ready(function(){

    // On détermine l'ID du bouton
    var button = document.getElementById('identite');

    // Cacher la barre de navigation
    $('#menu').css('display', 'none').hide();

    // Au clic, on lance une fonction
    button.addEventListener('click', function(){

        document.getElementById('main').classList.add('wrapperAnime');

        // Fait disparaitre le wrapper aprés 3 secondes
        setTimeout(function(){ document.getElementById('identite').style.display='none'; }, 2000);


        // document.getElementById('menu').style.display='block';


        // affichée la barre de navigation
        $('#menu').css('display', 'flex').hide().fadeIn(3000);

        $('#home').load('ajax/projets.php', function(){
            // $('#aaa').addClass('animated bounceOutLeft');
            // document.getElementById('').classList.add('');
        });

    });



});
