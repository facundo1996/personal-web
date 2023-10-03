<template>
  <div class="">
    <div class="project-details-container">

      <section class="section-title-project">

        <h1 class="title-project">
          {{ title }}
        </h1>

        <h5 class="about-page">About Page</h5>

        <div class="w-100 text-center d-flex align-items-center justify-content-center mb-3">
          <a class="link-project" href="">
            <img src="../../public/web.png" width="25" class="me-1" alt="">Link
          </a>
          <a class="link-project ms-3" href="">
            <img src="../../public/github.png" width="25" class="me-1" alt="">GitHub
          </a>
        </div>

        <div class="d-flex flex-wrap">
          <div class="section-tools border-end border-top border-bottom border-dark border-2">
            <h5>Stack Tecnológico</h5>
            <div class="d-flex flex-wrap">
              <div class="stack-card" v-for="(tool, index) in stack" :key="index" >{{ tool }}</div>
            </div>
            <h5 class="mt-2">Descripcion de proyecto</h5>
            <p class="font-text">
              {{ description }}
            </p>
          </div>
          <div class="section-tools border-top border-bottom border-dark border-2">b</div>
        </div>

        <div class="p-4">
          <img class="img-project" :src="pictures" alt="">
        </div>
      </section>
    </div>
  </div>
</template>
<script lang="ts">
import { projects } from '../stores/projects'
export default {
  name: "Project",
  data() {
    return {
      title: '',
      primary: '',
      description: '',
      github: '',
      programming: '',
      pictures: '',
      stack: [] as string[]
    }
  },
  mounted() {
    let titleProject = this.$route.params.project.toString()
    const selectedProject = projects.getProject(titleProject);
    if (selectedProject) {
      this.title = selectedProject.title;
      this.primary = selectedProject.primary;
      this.description = selectedProject.description;
      this.programming = selectedProject.programming;
      this.pictures = selectedProject.pictures;
      this.github = selectedProject.github;
      this.stack = selectedProject.stack;
    }
  },
}
</script>