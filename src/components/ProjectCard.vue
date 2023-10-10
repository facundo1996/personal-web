<template>
  <div class="project-card border border-3 border-dark" :style="`background: url(${project.pictures[0]}); background-size: cover;`">
    <div class="header-card" :class="project.primary === 'Vue JS' ? 'vue' : project.primary === 'React JS' ? 'react' : 'quasar'">
      {{ project.primary }}
    </div>
    <div class="bg-tiquewhite caption border-3">{{ project.title }}</div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ProjectCard",
  data() {
    return {
    }
  },
  props: ['project']
}
</script>