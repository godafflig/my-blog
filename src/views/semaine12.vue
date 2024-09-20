
<template>
  <h1>SEMAINE 12</h1>
  <div class="blog">
    <h3><a>12ème semaine</a></h3>
    <h3><a>12ème semaine</a></h3>
    <p>
      Je suis capable de mettre en action mon savoir-être et mon organisation
      pour contribuer à la mise en place de la cérémonie. Cette semaine a été
      particulièrement intense, avec des préparatifs qui ont nécessité une
      coordination précise entre tous les membres de l'équipe. Grâce à une bonne
      communication et à une planification rigoureuse, nous avons pu nous
      assurer que chaque détail était pris en compte, depuis la logistique
      jusqu'à l'accueil des invités.
    </p>

    <p>
      Je tiens à exprimer ma sincère gratitude à toute l'équipe du festival du
      film scolaire. Votre dévouement et votre passion ont rendu cet événement
      possible et mémorable. Un merci tout particulier à Sylvain, dont
      l'organisation et le leadership ont été essentiels pour orchestrer cette
      édition. Sa vision et son engagement ont permis de créer une atmosphère
      inspirante et chaleureuse pour tous les participants.
    </p>

    <p>
      Ensemble, nous avons créé quelque chose de spécial, et je suis fier
      d'avoir pu faire partie de cette aventure. Merci à tous pour votre travail
      acharné et votre esprit d'équipe.
    </p>

    <img src="../assets/regis.jpg" alt="" />
    <img src="../assets/salle.jpg" alt="" />
  </div>
</template>
<script>
export default {
  name: "SemaineStage12", // Changez le nom du composant ici
};
</script>

<style scoped>
img {
  width: 200px;
  height: 200px;
}
* {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  color: rgb(0, 0, 0);
}
.blog {
  padding: 20px; /* Ajoute un espace autour du contenu */
  max-width: 800px; /* Limite la largeur du texte pour une meilleure lisibilité */
  margin: 0 auto; /* Centre le container dans la page */
  text-align: left; /* Texte aligné à gauche */
  line-height: 1.6; /* Espace entre les lignes de texte */
  gap: 20px; /* Espace entre les éléments internes (si supporté) */
}

/* Ajout d'espacement entre les paragraphes */
.blog p {
  margin-bottom: 20px;
  font-size: larger;
}

h1 {
  text-align: center; /* Centre le titre "SEMAINE 1" */
}

h3 a {
  text-decoration: none;
  color: inherit;
  font-weight: bold;
}
</style>