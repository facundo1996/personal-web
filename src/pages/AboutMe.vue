
<template>
  <div class="d-flex flex-column justify-content-start align-items-center py-4 min-height-page">
    <div class="container-page">
      <AboutMeText />
      <Experience />
      <Skills />
    </div>
  </div>
</template>

<script lang="ts">
import AboutMeText from '../components/AboutMeText.vue';
import Experience from '../components/Experience.vue';
import Skills from '../components/Skills.vue';
export default {
  name: 'AboutMe',
  components: {
    AboutMeText,
    Experience,
    Skills
  }
}
</script>
