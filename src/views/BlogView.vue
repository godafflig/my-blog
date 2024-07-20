<template>
  <div class="blog">
    <a href="/semaine1">1ère semaine - 01/04.05/04</a>
    <a href="/semaine2">2ème semaine - 08/04.12/04</a>
    <a href="/semaine3">3ème semaine - 15/04.19/04</a>
    <a href="/semaine4">4ème semaine - 22/04.26/04</a>
    <a href="/semaine5">5ème semaine - 29/04.03/05</a>
    <a href="/semaine6">6ème semaine - 06/05.10/05</a>
    <a href="/semaine7">7ème semaine - 13/05.17/05</a>
    <a href="/semaine8">8ème semaine - 20/05.24/05</a>
    <a href="/semaine9">9ème semaine - 27/05.31/05</a>
    <a href="/semaine10">10ème semaine - 03/06.07/06</a>
    <a href="/semaine11">11ème semaine - 10/06.14/06</a>
    <a href="/semaine12">12ème semaine - 17/06.21/06</a>
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
.blog a {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  background-color: #828de6;
  color: #c1cbff;
  border-radius: 50px;
  margin: 1em;
  padding: 1em;
  width: calc(50% - 2em); 
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.5);
  text-align: center;
  text-decoration: none;
}
.blog a:hover {
  background-color: #4b558f;
  transform: translateY(-15px);
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.5);
}
</style>
