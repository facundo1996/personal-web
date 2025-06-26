
<template>
  <div class="project-container">
    <h2 class="title-projects text-center mt-md-5 mt-2 mb-5">Proyectos</h2>
    <div class="cards-container">
      <ProjectCard v-for="(project, index) in projects" :key="index" :project='project' @click="openModal(project)" data-aos="fade-up" :data-aos-duration="index*100+200" />
    </div>
  </div>
</template>

<script lang="ts">
import ProjectCard from '../components/ProjectCard.vue'
import ModalProject from '../components/ModalProject.vue'
import { projects } from '../stores/projects'
export default {
  name: "Projects",
  data() {
    return {
      projects: projects.Allprojects,  
    }
  },
  components: {
    ProjectCard,
    ModalProject
  },
  methods: {
    openModal(project:any) {
      this.$router.push({ 
        name: 'project', 
        params: { project: project.title },
      });
    }
  }
}
</script>