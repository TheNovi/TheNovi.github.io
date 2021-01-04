<template>
  <div>
    <Repo repo="Utano" state="Beta">
      Simple but powerful music player. Newest generation of Nmp.
    </Repo>
    <Repo repo="Nui" state="Beta">
      Small UI library used in almost every of my Python projects
    </Repo>
    <Repo repo="TheNovi.github.io" state="Released">
      This site
    </Repo>
    <Repo repo="NoviCypher" state="Beta - with release (Source code only)">
      My first attempt for open-source cypher
    </Repo>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Repo from "@/components/Repo.vue";

@Component({
  components: {
    Repo
  }
})
export default class Projects extends Vue {}
</script>
