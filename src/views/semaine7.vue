
<template>
  <h1>SEMAINE 7</h1>

  <div class="blog">
    <h3><a>7ème semaine</a></h3>
    <p>
      Cette semaine, j'ai dû entrer en contact avec notre responsable des
      partenariats, car certains partenaires avaient changé et il fallait les
      ajouter ou les retirer du site. Nous avons dressé une liste complète de
      tous les partenaires, et j'en ai profité pour repenser la mise en page de
      cette section du site. J'ai pris en compte la taille et le classement de
      chaque logo pour harmoniser l'affichage et donner une meilleure visibilité
      à chaque partenaire en fonction de son importance.
    </p>

    <p>
      En travaillant sur cette tâche, j'ai utilisé l'éditeur en ligne de Wix
      pour organiser les éléments de manière optimale. Cela m'a permis d'ajuster
      facilement la disposition des logos et d'appliquer des changements visuels
      tout en respectant la charte graphique du site. L'éditeur m'a offert une
      grande flexibilité pour agencer les contenus rapidement et efficacement.
    </p>

    <p>
      Cette expérience m'a permis de mieux comprendre l'importance de la
      présentation visuelle et de la hiérarchisation des éléments sur une page
      web. Je suis maintenant plus à l'aise avec l'organisation de contenus sur
      Wix et capable de gérer des modifications importantes tout en respectant
      les attentes de l'équipe.
    </p>
  </div>
</template>

<script>
export default {
  name: "SemaineStage7", // Changez le nom du composant ici
};
</script>

<style scoped>
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