<template>
  <div id="header">
    <h1><router-link :to="{ name: 'Home' }">TheNovi</router-link></h1>
    <div id="nav">
      <ul>
        <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
        <li><router-link :to="{ name: 'About' }">About</router-link></li>
        <li><router-link :to="{ name: 'Contact' }">Contact</router-link></li>
        <li><router-link :to="{ name: 'Projects' }">Projects</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {}
</script>

<style scoped>
#header {
  background: var(--back);
  text-align: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

#header h1 {
  margin: 0px 0px 0px 0px;
  padding: 30px 0px 10px 0px;
  text-align: center;
  font-size: 600%;
  font-family: georgia;
}

#header h1 a {
  color: white;
  text-decoration: none;
}

#nav ul {
  margin: 0px;
  padding: 0px;
  text-align: center;
  background-image: linear-gradient(to top, black, var(--back));
}

#nav ul li {
  display: inline-block;
  padding: 8px 0px;
  margin: 0px;
}

#nav ul li a {
  background-image: linear-gradient(to bottom, var(--back), #222);
  color: #bbb;
  text-decoration: none;
  font-size: 200%;
  margin: 0px 4px;
  padding: 0px 8px;
  border-radius: 9px;
}
</style>
