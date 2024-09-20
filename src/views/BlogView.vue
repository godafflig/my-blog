<template>
  <div class="blog">
    <router-link id="blog-link" to="/semaine1" class="blog-link">1ère semaine - 01/04.05/04</router-link>
    <router-link id="blog-link" to="/semaine2" class="blog-link">2ème semaine - 08/04.12/04</router-link>
    <router-link id="blog-link" to="/semaine3" class="blog-link">3ème semaine - 15/04.19/04</router-link>
    <router-link id="blog-link" to="/semaine4" class="blog-link">4ème semaine - 22/04.26/04</router-link>
    <router-link id="blog-link" to="/semaine5" class="blog-link">5ème semaine - 29/04.03/05</router-link>
    <router-link id="blog-link" to="/semaine6" class="blog-link">6ème semaine - 06/05.10/05</router-link>
    <router-link id="blog-link" to="/semaine7" class="blog-link">7ème semaine - 13/05.17/05</router-link>
    <router-link id="blog-link" to="/semaine8" class="blog-link">8ème semaine - 20/05.24/05</router-link>
    <router-link id="blog-link" to="/semaine9" class="blog-link">9ème semaine - 27/05.31/05</router-link>
    <router-link id="blog-link" to="/semaine10" class="blog-link">10ème semaine - 03/06.07/06</router-link>
    <router-link id="blog-link" to="/semaine11" class="blog-link">11ème semaine - 10/06.14/06</router-link>
    <router-link id="blog-link" to="/semaine12" class="blog-link">12ème semaine - 17/06.21/06</router-link>
  </div>
</template>

<script>
export default {
  name: "BlogView",
};
</script>

<style scoped>
.blog {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 5em;

}


#blog-link {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  background-color: #828de6; /* Couleur de fond assurée */
  color: #c1cbff;
  border-radius: 50px;
  margin: 1em;
  padding: 1em;
  width: calc(50% - 2em); 
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.5);
  text-align: center;
  text-decoration: none;
  opacity: 1; /* Assure que l'opacité est bien à 1 (pas transparente) */
}

#blog-link:hover {
  background-color: #4b558f;
  transform: translateY(-15px);
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.5);
}

</style>
