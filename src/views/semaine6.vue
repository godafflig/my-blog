
<template>
  <h1>SEMAINE 6</h1>

  <div class="blog">
    <h3><a>6ème semaine</a></h3>
    <p>
      Cette semaine, j'ai poursuivi le développement du calendrier en HTML et
      CSS pour le site. Une des principales tâches a été de gérer la version
      mobile du site, qui nécessitait une approche différente. J'ai donc décidé
      d'opter pour une version responsive du code, ce qui facilite la mise en
      production et assure une meilleure compatibilité entre les différents
      appareils. La page était divisée en deux parties, et bien que Wix propose
      une fonctionnalité pour redimensionner automatiquement l'interface sur
      mobile, le rendu n'était pas suffisamment lisible.
    </p>

    <p>
      En travaillant sur la version responsive, j'ai amélioré l'expérience
      utilisateur sur les petits écrans en optimisant l'affichage des
      informations. Cela m'a permis de rendre la page plus accessible et facile
      à lire, tout en conservant l'intégrité du design. Cette approche m'a aussi
      aidé à gérer mon temps plus efficacement et à être plus productif dans mon
      travail, en anticipant les défis techniques liés à l'adaptabilité du site.
    </p>

    <p>
      Grâce à ce projet, j'ai renforcé mes compétences en développement
      responsive et j'ai pu constater l'importance de penser l'interface de
      manière fluide, quelle que soit la taille de l'écran. Cela m'a également
      permis d'améliorer mes méthodes de travail pour être plus efficient dans
      la gestion de tâches complexes.
    </p>
  </div>
</template>

<script>
export default {
  name: "SemaineStage6", // Changez le nom du composant ici
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