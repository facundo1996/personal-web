
<template>
  <div class="project-container">
    <h2 class="title-projects text-center mt-md-5 mt-2">Proyectos</h2>
    <p class="sub-title text-center w-75 my-md-5 my-2">Desde mis primeros pasos escribiendo código HTML y CSS hasta liderar proyectos en una empresa tecnológica durante 3 años, he experimentado un crecimiento constante. Mi enfoque se ha centrado en la maestría de frameworks como React y Vue JS, contribuyendo al éxito de proyectos con soluciones innovadoras y eficientes.</p>
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