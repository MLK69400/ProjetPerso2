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
$('.lienCompetences').on('click',function(){
    $('#home').load('ajax/competences.php', function(){
    });
});

// Affiche home qand on clique sur le lien
$('.lienContact').click(function(){
    $('#home').load('ajax/contact.php', function(){
    });
});
