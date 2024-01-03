<template>
  <div class="section-container">
    <div class="sub-section-container d-flex flex-row-reverse justify-content-center justify-content-xl-between">
      <div data-aos="fade-up" data-aos-duration="500" class="d-flex flex-column justify-content-center text-end">
        <h2 class="title-about-me">Proyectos</h2>
        <p class="text-about-me">
          Aquí podrás ver algunos de los proyectos en los que he participado en mis <b>+3 años de experiencia como Front
            End</b> y también algunos de los proyectos que hice como practicas personales.
        </p>
        <p class="text-about-me">
          Aquí encontraras desde aplicaciones móviles hasta páginas web y experiencias Web3 para la venta de NFT.
        </p>
        <div class="d-flex justify-content-end">
          <router-link to="/projects" class="custom-button bg-white">Proyectos</router-link>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-duration="500" class="position-relative w-50 d-none d-xl-flex align-items-center">
        <div class="position-relative d-none d-xl-flex ">
          <div class="profile-container border border-2 border-dark project-1">
            <div class="header-card react">
              React JS
            </div>
            <div class="bg-tiquewhite caption">KT-Black</div>
          </div>

          <div class="profile-container border border-2 border-dark project-2">
            <div class="header-card quasar">
              Quasar
            </div>
            <div class="bg-tiquewhite caption">Fantasy</div>
          </div>

          <div class="profile-container border border-2 border-dark project-3">
            <div class="header-card vue">
              Vue JS
            </div>
            <div class="bg-tiquewhite caption">Incognito NFT</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-1 {
  position: absolute;
  background: url('../../src/images/kt-black-2.png');
  background-size: cover;
  background-repeat: no-repeat;
  left: 40px;
  top: -220px;
}

.project-2 {
  position: absolute;
  background: url('../../src/images/fantasy-1.png');
  background-size: cover;
  background-repeat: no-repeat;
  left: 180px;
  top: -160px;
}

.project-3 {
  position: absolute;
  background: url('../../src/images/incognito.png');
  background-size: cover;
  background-repeat: no-repeat;
  left: 320px;
  top: -100px;
}
</style>

<script lang="ts">
export default {
  name: "AccessToProjects",
  data() {
    return {
    }
  },
}
</script>