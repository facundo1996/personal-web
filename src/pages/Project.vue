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
              <img v-if="!link" src="../../src/images/lock.png" width="30" class="lock-icon">
              <button :disabled="link ?false :true" v-on:click="toPage(link)" class="link-project btn">
                <img src="../../src/images/web.png" width="25" class="me-1" alt="">Proyecto
              </button>
            </div>
          </Popper>
          <Popper hover placement="top" content="Repositorio privado" arrow :disabled="!!github" >
            <div class="position-relative">
              <img v-if="!github" src="../../src/images/lock.png" width="30" class="lock-icon">
              <button :disabled="github ?false :true" v-on:click="toPage(github)" class="link-project btn">
                <img src="../../src/images/github.png" width="25" class="me-1" alt="">GitHub
              </button>
            </div>
          </Popper>
        </div>

        <div class="d-flex flex-md-row flex-column">
          <div class="section-tools border-tools-1">
            <h5>Stack Tecnológico</h5>
            <div class="d-flex flex-wrap">
              <div class="stack-card" v-for="(tool, index) in stack" :key="index">{{ tool }}</div>
            </div>
            <h5 v-if="programming.length != 0" class="mt-3">Descripcion de proyecto</h5>
            <p v-if="programming.length != 0" class="font-text">
              {{ description }}
            </p>
          </div>

          <div class="section-tools border-tools-2">
            <span v-if="programming.length > 0">
              <h5 class="">Mis tareas:</h5>
              <ul>
                <li class="font-text" v-for="(task, index) in programming" :key="index">{{ task }}</li>
              </ul>
            </span>
            <span v-else>
              <h5 class="">Descripcion de proyecto</h5>
              <p class="font-text">
                {{ description }}
              </p>
            </span>
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