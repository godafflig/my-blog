
<template>
  <h1>SEMAINE 8</h1>

  <div class="blog">
    <h3><a>8ème semaine</a></h3>
    <p>
      Cette semaine, j'ai travaillé en binôme avec notre graphiste, qui s'est
      chargé de créer les nouveaux designs pour les jurys de l'édition 2024 du
      festival. Mon rôle a été de publier ces designs sur le site internet, tout
      en y ajoutant des animations pour rendre la présentation plus dynamique et
      attrayante. J'ai également mis en page la version mobile du site, en
      veillant à ce que l'affichage soit optimisé pour les téléphones et
      tablettes.
    </p>

    <p>
      En parallèle, j'ai intégré une toute nouvelle page dédiée aux jurys, où
      j'ai organisé les éléments en fonction des créations graphiques fournies
      par le graphiste. Grâce à l'éditeur en ligne de Wix, j'ai pu ajuster
      facilement la disposition et ajouter des effets interactifs pour améliorer
      l'expérience utilisateur.
    </p>

    <p>
      Cette collaboration m'a permis de renforcer mes compétences en mise en
      page et en animation web, tout en apprenant à intégrer rapidement des
      éléments visuels dans un environnement en ligne. Je suis désormais capable
      de gérer de bout en bout la création de pages web en utilisant les outils
      de Wix, et d'assurer une cohérence entre le design et le contenu du site.
    </p>
  </div>
</template>

<script>
export default {
  name: "SemaineStage8", // Changez le nom du composant ici
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