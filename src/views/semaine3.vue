
<template>
  <h1>SEMAINE 3</h1>

  <div class="blog">
    <h3><a>3ème semaine</a></h3>
    <p>
      Cette semaine, j'ai participé à une réunion avec Sylvain Loscoss, le
      directeur du festival, pour rectifier les informations sur les sponsors et
      partenaires affichées sur le site. Nous avons travaillé à simplifier la
      communication, tout en prenant des initiatives sur les changements à
      apporter au site. L'objectif principal était d'épurer une programmation
      devenue trop chargée et de rendre l'ensemble plus lisible pour le public.
    </p>

    <p>
      Ces réunions d'information ont été précieuses, car elles ont permis de
      remettre en perspective les objectifs du festival et de recentrer les
      efforts de toute l'équipe. Nous avons pu clarifier les attentes et ajuster
      la stratégie pour garantir un festival cohérent et réussi. Les prix à
      attribuer, comme ceux du collège (Prix sport et coup de cœur) et ceux du
      lycée, ont également été au centre des discussions.
    </p>
  </div>
</template>

<script>
export default {
  name: "SemaineStage3", // Changez le nom du composant ici
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