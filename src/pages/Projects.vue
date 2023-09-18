
<template>
  <div class="project-container">
    <h2 class="title-about-me text-center mt-5">Proyectos</h2>
    <p class="sub-title text-center w-75 my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem omnis dolore ab accusamus sunt recusandae optio, consequatur doloremque sapiente asperiores repellendus nemo cum adipisci harum numquam quos explicabo vel?</p>
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