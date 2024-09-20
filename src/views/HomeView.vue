<template>
  <div class="wrapper">
    <div class="grid1">
      <h3>HARD SKILLS</h3>
      <p>
        Je suis capable re réaliser des tableau en html ccs responsive depuis un
        visuel graphique <br /><br />
        Je suis capable de faire une audit de site pour améliorer son CEO et son
        accessibilité <br /><br />
        Je suis capable de faire un tableau Excel pour organiser et gérer les
        bénévole du festival <br /><br />
        Je suis capable d'identifier un problème et de trouver une solution
        adapter ce celui-ci en développement web
      </p>
    </div>
    <div class="grid2"></div>
    <div class="grid3"></div>
    <div class="grid4">
      <h3>SOFT SKILLS</h3>
      <p>
        Je suis capable de mettre en action mon savoir être et mon organisation
        pour placer aider à la mise ne place du cérémonie <br /><br />
        Je sais mettre à profit mon temps pour être le plus efficient possible
        dans mon travail <br /><br />
        je suis capable de créer du lien avec mes collaborateur pour avancer
        ensemble
      </p>
    </div>
    <div class="grid5">
      <p>
        Bonjour, je me présente je m'apelle Tom Benat je suis UI/UX designer.
      </p>
      <img src="../assets/photomoi.png" alt="logo linkedin" class="profil" />
    </div>
    <div class="grid6">
      <p>
        Développeur depuis deux, je suis passionné par le monde du digital,
        après Une formation et des expériences dans la restauration, j'ai décidé
        de me Réorienter dans le monde du digital plus particulièrement dans le
        web
      </p>
    </div>
    <div class="grid7">
      <p>
        Le festival du film scolaire c'est le seul festival de France qui permet
        au étudiant de faire reconnaitre le travail au près du grand public de
        grand jurys sont présent pour remettre des prix, comme Nelson Monfort
        Rebecca Marder ou encore Manon Bresch
      </p>
    </div>
    <div class="grid8">
      <img src="../assets/linkedin.png" alt="logo linkedin" class="media" />
      <a href="https://www.linkedin.com/in/tom-benat-764a171a1/">Tom Benat</a>
      <img
        src="../assets/logo-instagram.png"
        alt="logo instagram"
        class="media"
      />
      <p>tom_benat</p>
      <img src="../assets/telephone.png" alt="logo phone" class="media" />
      <p>06.69.91.20.25</p>
      <img src="../assets/email.png" alt="logo mail" class="media" />
      <a href="mailto:tom.benat@ynov.com">tom.benat@ynov.com</a>
      <img src="../assets/sociale.png" alt="logo mail" class="media" />
      <a href="https://github.com/godafflig">godafflig</a>
    </div>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: small;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  color: white;
}
body {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}

.wrapper {
  display: grid;
  margin: 0 auto;
  max-width: 1460px;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 20px;
  padding: 3em;
}

.wrapper div {
  display: flex;

  border-radius: 30px;
}

.grid1 {
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #8f81db;
  grid-column: 1/3;
  grid-row: 1/5;
  padding: 1em; /* Ajoute du padding pour l'espacement */
}

.grid1 p {
  text-align: left; /* Aligne le texte à gauche */
  padding-left: 1em; /* Ajoute un espace à gauche */
  margin: 0; /* Enlève la marge par défaut des paragraphes */
}

.grid2 {
  padding: 1em; /* Ajoute du padding pour l'espacement */

  background-color: #5b83e5;
  background-image: url("../assets/logoFNFS.png");
  border-radius: 30px;
  grid-column: 3/5;
  background-repeat: no-repeat;
  background-position: center;
  grid-row: 3/5;
  background-size: contain;
  grid-column: 3/5;
  grid-row: 1/3;
}
.grid3 {
  padding: 1em; /* Ajoute du padding pour l'espacement */

  background-image: url("../assets/groupe.jpg");
  border-radius: 30px;
  grid-column: 3/5;
  background-position: center;
  grid-row: 3/5;
  background-size: contain;
}

.grid4 {
  padding: 1em; /* Ajoute du padding pour l'espacement */

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #6cafeb;
  grid-column: 7/8;
  grid-row: 4/7;
}
.grid4 p {
  text-align: left; /* Aligne le texte à gauche */
  padding-left: 1em; /* Ajoute un espace à gauche */
  margin: 0; /* Enlève la marge par défaut des paragraphes */
}

.grid5 {
  justify-content: space-between;
  padding-top: 20px;
  flex-direction: column;
  align-items: center;
  background-color: #5b83e5;
  grid-row: 1/4;
  grid-column: 7/7;
}
.grid5 img {
  padding-left: 10px;
}

.grid6 {
  padding: 1em; /* Ajoute du padding pour l'espacement */

  flex-direction: column;
  align-items: center;
  background-color: #828de6;
  grid-row: 7/8;
  grid-column: 1/8;
}

.grid7 {
  padding: 1em; /* Ajoute du padding pour l'espacement */

  align-items: center;
  text-align: left;
  background-color: #6cafeb;
  grid-column: 1/5;
  grid-row: 5/7;
}
.grid8 {
  padding: 1em; /* Ajoute du padding pour l'espacement */

  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #2045c0;
  grid-column: 5/7;
  grid-row: 1/7;
}
.media {
  height: 55px;
  width: 55px;
}
.profil {
  height: 155px;
  width: 155px;
}
</style>

<script>
</script>

