<main class="container ">

    <div class="main">


        <section>
            <h2><span class="icone ion-android-chat"></span>Contact</h2>
            <p>Besoin d'un coup de pouce en programmation informatique, envie de me connaître un peu plus ou de m'envoyer un message ? Vous trouverez tout le necéssaire ci-dessous. Vous pouvez télécharger ma carte de visite au format vCard, pour m'ajouter facilement à votre carnet d'adresse, m'envoyer un message électronique, me contacter directement par téléphone ou joindre un de mes partenaires. Je m'engage à vous répondre dans la semaine.</p>
        </section>

        <section class="section2">
            <div class="boutton">
                <a href="tel: +33650574448"><p class="texte text">Appelez moi</p> </a>
            </div>
            <div class="boutton">
                <a href="#"><p class="texte text">286, chemin des clos 69640 Saint-Julien</p></a>
            </div>
            <div class="boutton">
                <a href="mailto:contact@mohamedkermiche.fr"><p class="texte text">Envoyez votre mail</p></a>
            </div>
            <div class="boutton">
                <a href="#"><p class="texte text">Partager</p></a>
            </div>
        </section>

        <aside id="asideContact">
            <div class="section">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d17760.899893803882!2d4.655831719520086!3d46.02086453201501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sfr!2sfr!4v1501438029968"  frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>

            <div class="section">
                <div class="row">
                    <div class="col-md-12">
                        <form action="contact2.php" method="post" class="text-center" id="formContact">

                            <div class="form-group">
                                <label class="obligatoire" for="nom">Nom</label>
                                <input type="text" name="nom" class="form-control" required>
                            </div>

                            <div class="form-group">
                                <label class="obligatoire" for="email">Mail</label>
                                <input type="email" name="email" class="form-control" required>
                            </div>

                            <div class="form-group">
                                <label class="obligatoire" for="message">Message</label>
                                <textarea name="message" rows="10" cols="80" class="form-control" required></textarea>
                            </div>

                            <div class="form-group text-center">
                                <input type="submit" name="btnSub" value="Envoyer" class="btn btn-success">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </aside>
    </div>
</main>
