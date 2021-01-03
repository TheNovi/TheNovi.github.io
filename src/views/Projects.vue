<template>
  <div>
    <!-- <Content title=""> </Content> -->
    <Content title="Utano">
      Simple but powerful music player. Newest generation of Nmp.
      <p>
        <a
          href="https://github.com/TheNovi/Utano"
          rel="noopener noreferrer"
          target="_blank"
          >Github</a
        >
      </p>
      <p>Beta</p>
    </Content>
    <Content title="Nui">
      Small UI library used in almost every of my Python projects
      <p>
        <a
          href="https://github.com/TheNovi/Nui"
          rel="noopener noreferrer"
          target="_blank"
          >Github</a
        >
      </p>
      <p>Beta</p>
    </Content>
    <Content title="TheNovi.github.io">
      This site
      <p>
        <a
          href="https://github.com/TheNovi/TheNovi.github.io"
          rel="noopener noreferrer"
          target="_blank"
          >Github</a
        >
      </p>
      <p>Released</p>
    </Content>
    <Content title="Novi Cypher">
      My first attempt for open-source cypher
      <p>
        <a
          href="https://github.com/TheNovi/NoviCypher"
          rel="noopener noreferrer"
          target="_blank"
          >Github</a
        >
      </p>
      <p>Beta - with release (Source code only)</p>
    </Content>
  </div>
</template>

<script lang="ts">
//TODO Github api
import { Component, Vue } from "vue-property-decorator";
import Content from "@/components/Content.vue";

@Component({
  components: {
    Content
  }
})
export default class Projects extends Vue {}
</script>
