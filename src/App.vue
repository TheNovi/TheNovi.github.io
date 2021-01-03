<template>
  <div>
    <Header />
    <router-view id="content" />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    Header,
    Footer
  }
})
export default class App extends Vue {}
</script>

<style>
:root {
  --back: #333;
}

html {
  background: var(--back);
}

body {
  margin: 0px;
}

#content {
  padding: 5px 20px 50px 20px;
  background-image: linear-gradient(to bottom, black, var(--back));
  text-align: left;
}

#content div {
  background: var(--back);
  padding: 10px;
  margin: 10px;
  color: #ddd;
  border: 2px solid #222;
}

#content div a {
  color: #44f;
  text-decoration: none;
}

#content div ul {
  margin: 0px;
}

#content div h2 {
  padding: 0px;
  margin: 0px;
}

#content div h2:first-letter {
  /* font-family: Georgia; */
  padding: 0px;
  margin: 0px;
  color: white;
  font-size: 50px;
  font-weight: normal;
  font-style: italic;
  text-decoration: none;
}

#content div h3 {
  font-size: 25px;
}

#content div p {
  color: #666;
}
</style>
