<template>
  <nav>
    <router-link to="/">A Propos</router-link> |
    <router-link to="/blog">Article</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  /* .color1 {color: #000000;}
.color2 {color: #1e2542;}
.color3 {color: #4b558f;} */
color: #c1cbff;
/* .color5 {color: #c1cbff;} */
}
nav a.router-link-exact-active:hover {
  /* /* .color1 {color: #000000;} */
/* color: #1e2542; */
/* color: #4b558f; */
/* color: #828de6; */
color: #828de6;


}
</style>
