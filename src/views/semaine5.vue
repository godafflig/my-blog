
<template>
  <h1>SEMAINE 5</h1>

  <div class="blog">
    <h3><a>5ème semaine</a></h3>
    <p>
      Cette semaine a été consacrée à l'amélioration de l'accessibilité du site.
      J'ai travaillé à l'inclusion de descriptions textuelles (alt text) pour
      les photos et illustrations, afin de rendre le site plus accessible aux
      personnes malvoyantes ou utilisant des lecteurs d'écran. En parallèle,
      l'outil Wix propose un indicateur de conformité aux bonnes pratiques
      d'accessibilité, ce qui m'a permis d'obtenir une vue d'ensemble sur l'état
      actuel du site. Cet outil est très utile pour évaluer rapidement si notre
      site respecte les normes d'accessibilité, tout en contribuant à un
      meilleur référencement SEO.
    </p>

    <p>
      Grâce à ces améliorations, le site est désormais plus inclusif et plus
      facilement repérable par les moteurs de recherche. J'ai aussi appris à
      effectuer un audit complet du site pour identifier les éléments à
      optimiser, que ce soit en termes de SEO ou d'accessibilité. Cela m'a
      permis de renforcer mes compétences dans ces deux domaines essentiels pour
      assurer une meilleure visibilité en ligne.
    </p>

    <p>
      Ce projet m'a donné une compréhension plus approfondie des critères
      d'accessibilité et des techniques SEO, ainsi que de l'importance
      d'optimiser ces aspects pour offrir une expérience utilisateur de qualité,
      tout en améliorant la performance globale du site.
    </p>

    <img class="analyse" src="../assets/analyse.png" alt="" />
    <div>
      <p>AVANT</p>
      <img src="../assets/mobileheader.png" alt="" />
      <p>APRES</p>
      <img src="../assets/mobilehomr.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SemaineStage5", // Changez le nom du composant ici
};
</script>

<style scoped>
* {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  color: rgb(0, 0, 0);
}
.analyse {
  width: 60%;
}
img {
  width: 200px;
  height: 400px;
}
</style>