<template>
  <div>
    <h2>{{ title }}</h2>
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  @Prop() private title!: string;
}
</script>

<style scoped>
div {
  background: var(--back);
  padding: 10px;
  margin: 10px;
  color: #ddd;
  border: 2px solid #222;
}

div a {
  color: #44f;
  text-decoration: none;
}

div ul {
  margin: 0px;
}

div h2 {
  padding: 0px;
  margin: 0px;
}

div h2:first-letter {
  /* font-family: Georgia; */
  padding: 0px;
  margin: 0px;
  color: white;
  font-size: 50px;
  font-weight: normal;
  font-style: italic;
  text-decoration: none;
}

div p {
  color: #666;
}
</style>
