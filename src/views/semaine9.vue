
<template>
  <h1>SEMAINE 9</h1>

  <div class="blog">
    <h3><a>9ème semaine</a></h3>
    <p>
      Cette semaine a été particulièrement riche en finitions et en détails
      concernant le site. J'ai travaillé sur les réglages des derniers
      changements apportés à la plateforme et au programme du festival. À
      l'approche de l'événement, nous avons dû faire face à divers ajustements :
      certains jurys ont annulé leur venue, tandis que de nouveaux sponsors se
      sont ajoutés à la liste. Cette dynamique a nécessité une grande
      flexibilité de notre part.
    </p>

    <p>
      En collaboration avec l'équipe, nous avons mis en place un système pour
      mettre à jour le site quotidiennement. Cela inclut la révision des
      informations sur les jurys, les sponsors et la programmation, afin de
      garantir que le contenu reflète toujours la réalité de l'événement. Grâce
      à l'éditeur de Wix, j'ai pu effectuer ces modifications rapidement et
      efficacement, en assurant une communication fluide sur toutes les pages du
      site.
    </p>

    <p>
      Cette semaine m'a permis de développer mes compétences en gestion de
      contenu dynamique et d'apprendre à m'adapter rapidement aux changements.
      J'ai compris l'importance de maintenir le site à jour pour offrir aux
      visiteurs une expérience fiable et pertinente, ce qui est crucial pour le
      succès du festival.
    </p>
  </div>
</template>

<script>
export default {
  name: "SemaineStage9", // Changez le nom du composant ici
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