<template>
  <div>
    &copy; TheNovi ({{ footer }}) -- Many thanks to
    <a href="https://github.com" rel="noopener noreferrer" target="_blank"
      >Github</a
    >
    for making this site possible.
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
const basic = namespace("basic");

@Component
export default class Footer extends Vue {
  @basic.State
  footer!: string;
}
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
