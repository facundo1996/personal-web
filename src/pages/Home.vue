<template>
  <div class="container-home">
    <Welcome />
    <AccessToProjects />
  </div>
</template>
<script lang="ts">
  import Welcome from '../components/Welcome.vue'
  import AccessToProjects from '../components/AccessToProjects.vue'
  export default {
    name: "AboutMe",
    components: {
      Welcome,
      AccessToProjects
    }
  }
</script>
