<template>
  <h1>SEMAINE 1</h1>
  <div class="blog">
    <h3><a>1ère semaine</a></h3>
    <p>
      Ma première semaine de stage a surtout été l'occasion de m'intégrer à
      l'équipe, de me présenter aux autres stagiaires et de me familiariser avec
      le fonctionnement de l'association. Étant une organisation bénévole, nous
      travaillons tous de manière volontaire et collaborative.
    </p>
    <p>
      Aujourd'hui, nous avons discuté de mon rôle en tant qu'UX designer et
      intégrateur web. Je vais reprendre le travail initié par un ancien
      stagiaire, ce qui me donne une base pour avancer. J'ai commencé par me
      familiariser avec l'environnement de travail : l'accès à OneDrive de
      l'association, la plateforme CMS WIX sur laquelle nous travaillons, et
      bien sûr, les locaux de l'association, qui sont simples mais bien
      organisés.
    </p>
    <p>
      La première étape consiste à analyser les tâches déjà effectuées et à
      planifier les améliorations. Je vais également travailler en collaboration
      avec les autres membres de l'équipe pour assurer que le design et
      l'intégration répondent aux besoins des utilisateurs finaux. Le défi
      principal sera d'apporter des solutions innovantes tout en respectant les
      ressources limitées de l'association.
    </p>
    <p>
      Cette première semaine m'a permis de mieux comprendre les attentes de mon
      stage, tout en me préparant aux projets à venir.
    </p>
  </div>
</template>

<script>
export default {
  name: "SemaineStage1", // Changez le nom du composant ici
};
</script>

<style scoped>
* {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  color: rgb(0, 0, 0);
}

/* Ajout du style pour centrer le texte dans le container et améliorer la lisibilité */
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
