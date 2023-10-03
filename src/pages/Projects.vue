
<template>
  <div class="project-container">
    <h2 class="title-projects text-center mt-5">Proyectos</h2>
    <p class="sub-title text-center w-75 my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rem omnis
      dolore ab accusamus sunt recusandae optio, consequatur doloremque sapiente asperiores repellendus nemo cum adipisci
      harum numquam quos explicabo vel?</p>
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
      projectSelected: {
        title: '',
        primary: '',
        description: '',
        programming: '',
        pictures: '',
      }
    }
  },
  components: {
    ProjectCard,
    ModalProject
  },
  methods: {
    openModal(project:any) {
      this.projectSelected = project
      this.$router.push({ 
        name: 'project', 
        params: { project: project.title },
      });
    }
  }
}
</script>