<?php

$email = mail;

if(!filter_var($email,
               FILTER_VALIDATE_EMAIL))
{
    $errors[] = 'Adresse mail non valide';
}


?>


<?php
$news = array(1 => array('auteur' => 'christophetd', 'titre' => 'Ma première news', 'contenu' => 'Test'));
?>
