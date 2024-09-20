
<template>
  <h1>SEMAINE 4</h1>

  <div class="blog">
    <h3><a>4ème semaine</a></h3>
    <p>
      Cette semaine a été dédiée à la réalisation d'un grand calendrier
      interactif en HTML et CSS, destiné à partager la programmation du festival
      de manière claire et détaillée, heure par heure. Ce calendrier inclut
      toutes les activités prévues, telles que les remises de prix, la radio
      libre, et la diffusion des films réalisés par les élèves. Mon objectif
      était de créer un tableau responsive qui s'adapte à tous les types
      d'écrans, tout en respectant le visuel graphique fourni.
    </p>

    <p>
      Grâce à mes compétences en développement web, j'ai pu concevoir des
      tableaux en HTML et CSS de manière efficace, garantissant une bonne
      lisibilité et une expérience utilisateur optimale sur mobiles et
      ordinateurs. J'ai appris à mieux gérer mon temps pour maximiser mon
      efficacité dans ce projet. Cela m'a permis d'être plus productif tout en
      respectant les délais imposés.
    </p>

    <p>
      Durant cette phase, j'ai également développé ma capacité à identifier
      rapidement les problèmes techniques et à apporter des solutions adaptées,
      que ce soit en termes de design ou de développement. Ce projet m'a permis
      de renforcer mes compétences en développement responsive et de contribuer
      de manière concrète au succès du festival.
    </p>
  </div>
</template>

<script>
export default {
  name: "SemaineStage4", // Changez le nom du composant ici
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