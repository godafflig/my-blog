<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>

  <div class="container">
    <img src="@/assets/photomoi.png" alt="logo du festival du film scolaire" />

    <p>
      Bonjour, je me présente je m'apelle Tom Benat je suis UI designer.
      Développeur depuis deux, je suis passionné par le monde du digital, après.
      Une formation et des expériences dans la restauration, j'ai décidé de me
      Réorienter dans le monde du digital plus particulièrement dans le web
      <br /><br /><br />
      Mes atouts sont : <br>Mon esprit d'équipe, je joue un foot depuis que je suis
      tout petit donc pour moi l'esprit d'équipe, c'est primordial <br> Ma
      motivation/perserverance : Je persévère en toutes circonstances, sans
      jamais abandonner. <br> Mon organisation : l'organisation est essentielle pour
      moi.
    </p>
  </div>

  <div class="container">
    <p>
      Bienvenue sur mon blog. C'est ici que je partage mon expérience de stage
      au sein du festival du film scolaire.<br />
      Cette expérience me permet de valider ma deuxième année dans mon cursus du
      bachelor à Ynov Campus.<br />
      Ce blog a pour but de documenter toutes les tâches et problèmes que j'ai
      pu rencontrer au cours de ma période de stage, qui s'est déroulée en
      demi-journée du 1er avril au 21 juin.
    </p>
  </div>

  <div class="festival">
    <img src="@/assets/logoFNFS.png" alt="logo du festival du film scolaire" />
  </div>

  <div class="container">
    <p>
      Le festival du film scolaire c'est le seul festival de france qui permet
      au etudiant de faire reconniatre le travila au pres du grand public <br />
      de grand jurys sont present pour remttre des prix, comme nelosn monfort
      rebecca marder ou encore manon bresch
    </p>
  </div>
</template>

<style>
p {
  font-size: large;
}

.container {
  display: flex;
  text-align: justify;
  padding: 2em;
  border: 3px solid black;
  margin: 2em 30em 5em 30em;
  border-radius: 100px;
}
.festival img {
  width: 200px;
}
</style>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
