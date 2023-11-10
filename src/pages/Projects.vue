
<template>
  <div class="project-container">
    <h2 class="title-projects text-center mt-5">Proyectos</h2>
    <p class="sub-title text-center w-75 my-5">Estos son algunos de los proyectos que realice desde mis inicios con las tecnologias mas somples como HTML y CSS hasta los que hice en la empresaen la cual trabaje 3 años con distintso framework como React y Vue JS.</p>
    <div class="cards-container">
      <ProjectCard v-for="(project, index) in projects" :key="index" :project='project' @click="openModal(project)" />
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