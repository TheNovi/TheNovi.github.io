<template>
  <div>
    <Header />
    <router-view id="content" />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    Header,
    Footer
  }
})
export default class App extends Vue {
  created() {
    this.$store.dispatch("basic/init");
  }

  @Watch("$route")
  setTitle() {
    const path = this.$route.path
      .replace(/^\//, "")
      .replace(/^\w/, c => c.toUpperCase());
    document.title = "TheNovi" + (path ? ` | ${path}` : "");
  }
}
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
</style>
