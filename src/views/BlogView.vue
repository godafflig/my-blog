
<template>
  <div class="blog">
    <a>1er semaine</a>
    <a>2ème semaine</a>
    <a>3ème semaine</a>
    <a>4ème semaine</a>
    <a>5ème semaine</a>
    <a>6ème semaine</a>
  </div>
</template>

<script>
export default {
  name: "BlogView", // Changez le nom du composant ici
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
.blog a {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  background-color: #828de6;
  color: #c1cbff;
  border-radius: 100em;
  margin: 2em 2em 2em 2em;
  padding: 6em;
  width: 25em;
  height: 1em;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.5);
}
.blog a:hover {
  background-color: #4b558f;
  box-shadow: #2c3e50;
  transform: translateY(-15px);
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.5);
}
</style>