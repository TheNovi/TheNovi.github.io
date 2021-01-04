<template>
  <Content :title="repo">
    <slot />
    <p>
      <a
        :href="`https://github.com/${owner}/${repo}`"
        rel="noopener noreferrer"
        target="_blank"
        >Github</a
      >
    </p>
    <p>{{ state }}</p>
    <p v-if="release.url">
      Latest ver:
      <a target="_blank" :href="release.html_url">{{ release.tag_name }}</a>
    </p>
  </Content>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Content from "@/components/Content.vue";
import { GithubApi } from "@/api/github.api";
import { Release } from "@/model/github-release.model";

@Component({ components: { Content } })
export default class Repo extends Vue {
  @Prop() repo!: string;
  @Prop({ default: "TheNovi" }) owner!: string;
  @Prop() state!: string;

  release = {} as Release;

  mounted() {
    GithubApi.getRepoInfo(this.repo, this.owner)
      .then(rel => {
        this.release = rel.data;
      })
      .catch(() => undefined);
  }
}
</script>

<style scoped></style>
