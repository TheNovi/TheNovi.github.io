<template>
  <div>
    &copy; TheNovi ({}) -- Many thanks to
    <a href="https://github.com" rel="noopener noreferrer" target="_blank"
      >Github</a
    >
    for making this site possible.
  </div>
</template>

<script lang="ts">
// TODO Year
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {}
</script>

<style scoped>
div {
  background: var(--back);
  padding: 5px;
  margin: 5px;
  text-align: left;
  /* font-family: arial; */
  color: #666;
  font-size: 10px;
}

a {
  color: #44f;
  text-decoration: none;
}
</style>
