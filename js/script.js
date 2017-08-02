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
          $('#home').fadeIn('normal');
        });

    });

    ////////[AJAX]////////

    // Affiche home qand on clique sur le lien
    $('#lienHome').click(function(){
        $('#home').load('ajax/home.php', function(){
        });
    });

    // Affiche home qand on clique sur le lien
    $('.lienExperiences').click(function(){
        $('#home').load('ajax/experiences.php', function(){
        });
    });

    // Affiche home qand on clique sur le lien
    $('.lienFormations').click(function(){
        $('#home').load('ajax/formations.php', function(){
        });
    });

    // Affiche home qand on clique sur le lien
    $('.lienProfil').click(function(){
        $('#home').load('ajax/profil.php', function(){
        });
    });

    // Affiche home qand on clique sur le lien
    $('.lienProjets').click(function(){
        $('#home').load('ajax/projets.php', function(){
        });
    });

    // Affiche competences qand on clique sur le lien
    $('.lienCompetences').click(function(){
        $('#home').load('ajax/competences.php', function(){
        });
    });

    // Affiche home qand on clique sur le lien
    $('.lienContact').click(function(){
        $('#home').load('ajax/contact.php', function(){
        });
    });



});
