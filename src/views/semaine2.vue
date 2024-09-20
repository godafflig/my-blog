<template>
  <h1>SEMAINE 2</h1>

  <div class="blog">
    <h3><a>2ème semaine</a></h3>

    <p>
      La deuxième semaine a été marquée par mes premiers travaux concrets sur le
      site web du festival. J'ai notamment commencé par la refonte de la page
      d'accueil, en m'inspirant de mes propres idées et de certaines tendances
      modernes du design. Grâce à l'éditeur en ligne de Wix, j'ai pu ajouter et
      organiser divers éléments sur la page de manière fluide, tout en
      respectant l'identité visuelle du festival.
    </p>

    <p>
      J'ai également pris en main les différents outils proposés par Wix, ce qui
      m'a permis d'intégrer du code directement dans les pages. Cette
      fonctionnalité m'offre une grande flexibilité pour rendre le site plus
      dynamique et adaptable. En ajoutant des scripts et des éléments
      interactifs, je peux facilement ajuster le contenu du site selon les
      besoins de l'association et les retours des utilisateurs, tout en
      maintenant une interface simple et intuitive à gérer.
    </p>

    <p>
      Cette semaine m'a permis de mieux comprendre le potentiel de l'éditeur Wix
      et d'améliorer mes compétences en design et en intégration de code, ce qui
      sera essentiel pour les futures modifications du site web du festival.
    </p>
  </div>
</template>


<script>
export default {
  name: "SemaineStage2", // Changez le nom du composant ici
};
</script>

<style>
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