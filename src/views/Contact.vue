<template>
  <div>
    <Content title="Contact/Social">
      <ul>
        <li>jakub.novi.novacek@gmail.com</li>
        <li>Discord: TheNovi#9782</li>
        <li>
          <a
            href="https://twitter.com/TheN0vi"
            rel="noopener noreferrer"
            target="_blank"
            >Twitter</a
          >
        </li>
        <li>
          <a
            href="https://facebook.com/TheN0vi"
            rel="noopener noreferrer"
            target="_blank"
            >Facebook</a
          >
        </li>
      </ul>
    </Content>
    <Content title="Programing">
      <ul>
        <li>
          <a
            href="https://github.com/TheNovi"
            rel="noopener noreferrer"
            target="_blank"
            >Github</a
          >
        </li>
      </ul>
    </Content>
    <Content title="Gaming/Other">
      <ul>
        <li>
          <a
            href="http://steamcommunity.com/id/TheNovi"
            rel="noopener noreferrer"
            target="_blank"
            >Steam</a
          >
        </li>
        <li>
          <a
            href="https://anilist.co/user/TheNovi/"
            rel="noopener noreferrer"
            target="_blank"
            >AniList</a
          >
        </li>
      </ul>
    </Content>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Content from "@/components/Content.vue";

@Component({
  components: {
    Content
  }
})
export default class Contact extends Vue {}
</script>
