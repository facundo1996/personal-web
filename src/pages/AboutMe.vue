
<template>
  <div class="d-flex flex-column justify-content-start align-items-center py-4 min-height-page">
    <div class="container-page">
      <AboutMeText />
      <Skills />
    </div>
  </div>
</template>

<script lang="ts">
import AboutMeText from '../components/AboutMeText.vue';
import Skills from '../components/Skills.vue';
export default {
  name: 'AboutMe',
  components: {
    AboutMeText,
    Skills
  }
}
</script>
