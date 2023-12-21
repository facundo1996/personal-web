<template>
  <footer class="py-5 text-white bg-black">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <router-link to="/" class="nav-link px-2 text-white">Inicio</router-link>
      <router-link to="/about-me" class="nav-link px-2 text-white">Sobre mí</router-link>
      <router-link to="/projects" class="nav-link px-2 text-white">Proyectos</router-link>
      <router-link to="/contact" class="nav-link px-2 text-white">Contacto</router-link>
    </ul>
    <p class="text-center">Facundo Benedetto</p>
    <div class="social-container-footer">
        <a href="https://github.com/facundo1996" target="_blanck" class="btn-icon-social-footer">
          <img src="https://www.svgrepo.com/show/501210/github.svg" alt="">
        </a>
        <a href="https://www.linkedin.com/in/facundo-benedetto-44772b189/" target="_blanck" class="btn-icon-social-footer">
          <img src="https://www.svgrepo.com/show/512419/linkedin-161.svg" alt="">
        </a>
        <a href="mailto:facundobenedetto2@outlook.com" target="_blanck" class="btn-icon-social-footer">
          <img src="https://www.svgrepo.com/show/117938/outlook-logo.svg" alt="">
        </a>
        <a href="https://drive.google.com/file/d/1I77hAxKgUGLt9RYULRP3FnInCdjLUPFY/view?usp=sharing" target="_blanck" class="btn-icon-social-footer">
          <img src="https://www.svgrepo.com/show/256562/curriculum-portfolio.svg" alt="">
        </a>
      </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: "Footer",
  data(){
    return {
    }
  },
}
</script>