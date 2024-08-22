<template>
  <div class="wrapper">
    <div class="grid1">
      <h3>HARD SKILLS</h3>
      <p>
        Je suis capable re réaliser des tableau en html ccs responsive depuis un
        visuel graphique Je suis capable de faire une audit de site pour
        améliorer son CEO et son accessibilité Je suis capable de faire un
        tableau Excel pour organiser et gérer les bénévole du festival Je suis
        capable d'identifier un problème et de trouver une solution adapter ce
        celui-ci en développement web
      </p>
    </div>
    <div class="grid2"></div>
    <div class="grid3"></div>
    <div class="grid4"></div>
    <div class="grid5"></div>
    <div class="grid6"></div>
    <div class="grid7"></div>
    <div class="grid8"></div>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-align: center;
}
body {
  color: aliceblue;
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
  border-radius: 30px;
}

.grid1 {
  background-color: #8f81db;
  grid-column: 1/3;
  grid-row: 1/5;
}
.grid2 {
  background-color: #5b83e5;

  grid-column: 3/5;
  grid-row: 1/3;
}
.grid3 {
  background-image: url("../assets/groupe.jpg");
  grid-column: 3/5;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  grid-row: 3/5;
}

.grid4 {
  background-color: #6cafeb;
  grid-column: 7/8;
  grid-row: 4/7;
}

.grid5 {
  background-color: #5b83e5;
  grid-row: 1/4;
  grid-column: 7/7;
}

.grid6 {
  background-color: #828de6;
  grid-row: 7/8;
  grid-column: 1/8;
}

.grid7 {
  background-color: #6cafeb;
  grid-column: 1/5;
  grid-row: 5/7;
}
.grid8 {
  background-color: #2045c0;
  grid-column: 5/7;
  grid-row: 1/7;
}
</style>

<script>
</script>

