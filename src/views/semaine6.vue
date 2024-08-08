
<template>
  <h1>SEMAINE 6</h1>

  <div class="blog">
    <a>6ème semaine</a>
    <p>
      cette semaine j'ai continué le calendrier toujours en html Css du site; le
      site internet avait une version mobile quil fallait gérer d'une façon
      Différente j'ai donc pris le parti prit de faire une version responsive du
      code pour faciliter la mise en production de la page. la page était faite
      en deux parties et la version mobile étaient gérés grace à la
      Rfonctionalite de six qui mette à lechelle l'interface mais cette
      interface n'était pas assez lisible.
    </p>
  </div>
</template>

<script>
export default {
  name: "SemaineStage1", // Changez le nom du composant ici
};
</script>

<style scoped>
.blog {
  display: flex;
  transition: all ease 0.5s;
  flex-direction: column;
  align-items: center;
  padding: 5em;
}
</style>