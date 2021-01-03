<template>
  <div>
    <Content title="About me">
      {{ age }}
      <p><a href="html/About.html">More</a></p>
    </Content>
    <Content title="Contact">
      <ul>
        <li>jakub.novi.novacek@gmail.com</li>
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
            href="https://github.com/TheNovi"
            rel="noopener noreferrer"
            target="_blank"
            >Github</a
          >
        </li>
        <li>
          <a
            href="http://steamcommunity.com/id/TheNovi"
            rel="noopener noreferrer"
            target="_blank"
            >Steam</a
          >
        </li>
      </ul>

      <p>
        <a href="html/Contact.html">More</a>
      </p>
    </Content>
    <Content title="Projects">
      <ul>
        <li>
          This site
          <a
            href="https://github.com/TheNovi/TheNovi.github.io"
            rel="noopener noreferrer"
            target="_blank"
            >Github</a
          >
        </li>
        <li>
          Utano
          <a
            href="https://github.com/TheNovi/Utano"
            rel="noopener noreferrer"
            target="_blank"
            >Github</a
          >
        </li>
        <li>
          Nui
          <a
            href="https://github.com/TheNovi/Nui"
            rel="noopener noreferrer"
            target="_blank"
            >Github</a
          >
        </li>
      </ul>

      <p>
        <a href="html/Projects.html">More</a>
      </p>
    </Content>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Content from "@/components/Content.vue";
import { namespace } from "vuex-class";
const basic = namespace("basic");

@Component({
  components: {
    Content
  }
})
export default class Home extends Vue {
  @basic.State
  age!: string;
}
</script>
