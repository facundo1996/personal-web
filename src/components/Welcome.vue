<template>
  <div class="section-container bg-tiquewhite">
    <section class="sub-section-container bg-tiquewhite d-flex justify-content-center justify-content-xl-between">
      <div class="d-flex flex-column justify-content-center">
        <h2 class="title-about-me">¡Bienvenido a mi espacio digital!</h2>
        <p class="text-about-me">
          Mi nombre es <b>Facundo Benedetto</b>
          <br>
          Aquí podrás conocer más sobre mí, explorar mis habilidades y descubrir los proyectos web y aplicaciones en los que he dejado mi huella.
        </p>
        <p class="text-about-me">
          Estoy en la búsqueda de un papel desafiante en una empresa con visión de futuro, donde pueda seguir creciendo profesionalmente y contribuir en un equipo que valore la creatividad y la colaboración.
        </p>
        <div class="d-flex">
          <router-link class="me-3 custom-button bg-white" to="/about-me">
            Sobre mí
          </router-link>
          <a href="https://www.linkedin.com/in/facundo-benedetto-44772b189/" target="_blanck" class="custom-button bg-transparent">LinkedIn</a>
        </div>
      </div>
      <div class="position-relative w-50 d-none d-xl-flex">
        <div class="profile-container border border-2 border-dark picture-1">
          <div class="header-card icon-code">
            <img src="../../public/code.png" alt="">
          </div>
          <div class="bg-white caption">Front End</div>
        </div>

        <div class="profile-container border border-2 border-dark picture-2">
          <div class="header-card icon-site">
            <img src="../../public/lugar.png" alt="">
          </div>
          <div class="bg-white caption">Rosario</div>
        </div>

        <div class="profile-container border border-2 border-dark picture-3">
          <div class="header-card icon-profile">
            <img src="../../public/profile.png" alt="">
          </div>
          <div class="bg-white caption">Facundo</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
export default {
  name: "Welcome",
  data() {
    return {
    }
  },
}
</script>