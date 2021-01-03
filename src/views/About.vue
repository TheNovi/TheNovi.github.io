<template>
  <div>
    <Content title="Who am I?">
      {}<br />
      <!-- TODO Main script -->
      If you want to know more (for some reason).
      <a href="Contact.html">contact me</a>.
    </Content>
    <Content title="Programming">
      I wrote my first 'Hello world!' program at the
      <a
        href="https://www.spsejecna.cz/english"
        rel="noopener noreferrer"
        target="_blank"
        >high school</a
      >. It was a C# window application. Later that year I tried making my first
      game for LudumDare.<br />
      The second year of school we were learning Java. And that year my friend
      told me about Python. Next year I started my Music Player (see
      <a href="Projects.html">Projects</a>).<br />
      After finishing high school, I managed to get at
      <a href="https://fit.cvut.cz/en" rel="noopener noreferrer" target="_blank"
        >CVUT FIT</a
      >. But only for a very short time, because I started to hate C and didn't
      understand higher mathematics. So I quit.<br />
      Got a job in a near Hotel, and started learning programming myself. After
      some time i got a job at
      <a
        href="http://www.steiner.cz/?ln=_en"
        rel="noopener noreferrer"
        target="_blank"
        >Steiner</a
      >
      as JAVA (mainly Spring and Vaadin) developer.
    </Content>
    <Content title="Gaming">
      Everything started when I got a PlayStation 2 for my 5-7th birthday (don't
      remember exactly). There I got hooked on a game named 'Jak and Daxter'
      which was funny because I didn't know any English.<br />
      After some time (I think it was a gift for my 10th birthday) I got a
      PlayStation 3, great times.<br />
      But the most important moment was my 15th birthday when I got my first
      notebook and new age started. Also, that was the time I started going to
      high school where my programming lives started.<br />
      Since then I have played thousends of games, just switching them, never
      really got hooked on to any of them.<br />
      When I was 20, I got my new awesome desktop computer and here we are.
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
export default class About extends Vue {}
</script>
