<template>
  <div class="">
    <div class="project-details-container">

      <section class="section-title-project">

        <h1 class="title-project">
          {{ title }}
        </h1>

        <h5 class="about-page">Sobre la página</h5>

        <div class="w-100 text-center d-flex align-items-center justify-content-center mb-3">
          <Popper hover placement="top" content="Proyecto no disponible" arrow :disabled="!!link" >
            <div class="position-relative">
              <img v-if="!link" src="../../public/lock.png" width="30" class="lock-icon">
              <button :disabled="link ?false :true" v-on:click="toPage(link)" class="link-project btn">
                <img src="../../public/web.png" width="25" class="me-1" alt="">Web
              </button>
            </div>
          </Popper>
          <Popper hover placement="top" content="Repositorio privado" arrow :disabled="!!github" >
            <div class="position-relative">
              <img v-if="!github" src="../../public/lock.png" width="30" class="lock-icon">
              <button :disabled="github ?false :true" v-on:click="toPage(github)" class="link-project btn">
                <img src="../../public/github.png" width="25" class="me-1" alt="">GitHub
              </button>
            </div>
          </Popper>
        </div>

        <div class="d-flex flex-wrap">
          <div class="section-tools border-end border-top border-bottom border-dark border-2">
            <h5>Stack Tecnológico</h5>
            <div class="d-flex flex-wrap">
              <div class="stack-card" v-for="(tool, index) in stack" :key="index">{{ tool }}</div>
            </div>
            <h5 class="mt-3">Descripcion de proyecto</h5>
            <p class="font-text">
              {{ description }}
            </p>
          </div>
          <div class="section-tools border-top border-bottom border-dark border-2">
            <h5 class="mt-2">Mis tareas:</h5>
            <ul>
              <li class="font-text" v-for="(task, index) in programming" :key="index">{{ task }}</li>
            </ul>
          </div>
        </div>

        <div class="p-4">
          <img v-for="(picture, index) in pictures" :key="index"
            :class="border ? 'img-project border border-dark border-1' : 'img-project'" :src="picture" alt="">
        </div>
      </section>
    </div>
  </div>
</template>
<script lang="ts">
import { projects } from '../stores/projects'
import Popper from "vue3-popper";

export default {
  name: "Project",
  data() {
    return {
      title: '',
      primary: '',
      description: '',
      link: '',
      github: '',
      programming: [] as string[],
      pictures: [] as string[],
      stack: [] as string[],
      border: false,
    }
  },
  components: {
    Popper,
  },
  methods: {
    toPage(page:string) {
      window.open(page, "_blank");
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
      this.link = selectedProject.link;
      this.github = selectedProject.github;
      this.stack = selectedProject.stack;
      this.border = selectedProject.border as false;
    }
  },
}
</script>