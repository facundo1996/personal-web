<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light custom-navbar px-3 fixed-top">
    <div class="container-fluid navbar-container p-0">
      <router-link class="navbar-brand fs-3 title-navbar" to="/">Facundo Benedetto</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="social-container d-lg-flex d-none">
        <a href="https://github.com/facundo1996" target="_blanck" class="btn-icon-social "><img class="icon-social" src="https://www.svgrepo.com/show/501210/github.svg" alt=""></a>
        <a href="https://www.linkedin.com/in/facundo-benedetto-44772b189/" target="_blanck" class="btn-icon-social "><img class="icon-social" src="https://www.svgrepo.com/show/512419/linkedin-161.svg" alt=""></a>
        <a href="mailto:facundobenedetto2@outlook.com" target="_blanck" class="btn-icon-social "><img class="icon-social" src="https://www.svgrepo.com/show/117938/outlook-logo.svg" alt=""></a>
        <a href="https://drive.google.com/file/d/1I77hAxKgUGLt9RYULRP3FnInCdjLUPFY/view?usp=sharing" target="_blanck" class="btn-icon-social "><img class="icon-social" src="https://www.svgrepo.com/show/256562/curriculum-portfolio.svg" alt=""></a>
      </div>
      <div class="collapse navbar-collapse flex-grow-0" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link link-navbar active" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link link-navbar active" to="/about-me">Sobre mí</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link link-navbar active" to="/projects">Proyectos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link link-navbar active" to="/contact">Contacto</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: "Navbar",
  data(){
    return {
    }
  },
}
</script>