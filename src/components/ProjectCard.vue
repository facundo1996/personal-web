<template>
  <div class="project-card border border-3 border-dark">
    <div class="header-card icon-site">
      {{ project.primary }}
    </div>
    <div class="bg-white caption border-3">{{ project.title }}</div>
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