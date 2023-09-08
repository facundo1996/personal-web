<template>
  <div class="section-container bg-tiquewhite">
    <div class="sub-section-container bg-tiquewhite d-flex justify-content-between">
      <div class="d-flex flex-column justify-content-center">
        <h2 class="title-about-me">Sobre mí</h2>
        <h3 class="subtitle-about-me">Frontend Developer</h3>
        <p class="text-about-me">
          Soy un apasionado del desarrollo <b>Front-End</b> con 3 años de experiencia en diversos proyectos, como
          <b>aplicaciones móviles, aplicaciones web y web3</b>. Tengo habilidades demostradas para trabajar eficazmente en
          <b>entornos ágiles y de ritmo rápido</b>.
        </p>
        <p class="text-about-me">
          Busco un papel desafiante en una empresa con visión de futuro donde pueda seguir creciendo y trabajando en un
          <b>equipo</b> que valore la creatividad y colaboración.
        </p>
        <div class="d-flex">
          <button class="me-3 custom-button bg-white">Sobre mí</button>
          <button class="custom-button bg-transparent">LinkedIn</button>
        </div>
      </div>
      <div class="position-relative w-50">

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
    </div>
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