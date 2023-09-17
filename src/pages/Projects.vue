
<template>
  <div class="project-container">
    <div class="cards-container">
      <ProjectCard 
        v-for="(project, index) in projects" 
        :key="index" 
        :project='project' 
      />
    </div>
  </div>
</template>

<script lang="ts">
import ProjectCard from '../components/ProjectCard.vue'
import projects from '../stores/projects'
export default {
  name: "Projects",
  data() {
    return {
      projects: projects
    }
  },
  components:{
    ProjectCard
  }
}
</script>