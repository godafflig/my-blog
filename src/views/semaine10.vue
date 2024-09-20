
<template>
  <h1>SEMAINE 10</h1>

  <div class="blog">
    <h3><a>10ème semaine</a></h3>

    <p>
      Cette semaine, j'ai utilisé un tableau Excel pour gérer l'ensemble des
      bénévoles pour le jour du festival. Avec la participation de 30 bénévoles
      de l'association, il était essentiel de bien organiser les repas prévus
      pour chacun d'entre eux. J'ai donc pris le soin de créer un tableau clair
      et détaillé afin de planifier ces repas de manière efficace.
    </p>

    <p>
      Dans ce tableau, j'ai noté les différentes options de repas, les allergies
      éventuelles des bénévoles et les horaires de distribution. Cela m'a permis
      de m'assurer que chaque bénévole ait un repas qui lui convienne, tout en
      évitant tout problème logistique le jour J. Grâce à cette organisation,
      nous pourrons offrir un service fluide et agréable aux bénévoles, qui sont
      essentiels au bon déroulement de l'événement.
    </p>

    <p>
      Cette expérience m'a appris l'importance de la planification et de la
      gestion des ressources humaines dans le cadre d'un événement, tout en
      renforçant mes compétences en utilisation d'outils de gestion comme Excel.
      Je suis désormais plus à l'aise avec la création de tableaux organisés, ce
      qui sera un atout pour des projets futurs.
    </p>
  </div>
</template>

<script>
export default {
  name: "SemaineStage10", // Changez le nom du composant ici
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