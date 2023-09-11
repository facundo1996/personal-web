<template>
  <div class="section-container">
    <div class="sub-section-container d-flex flex-row-reverse justify-content-center justify-content-xl-between">
      <div class="d-flex flex-column justify-content-center text-end">
        <h2 class="title-about-me">Proyectos</h2>
        <p class="text-about-me">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit omnis inventore corporis iure. Unde eos odio
          quidem fugit autem porro incidunt optio quis totam laudantium non maxime, harum, ipsum soluta?
        </p>
        <p class="text-about-me">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium qui esse minima optio vero quasi error
          totam illo, mollitia temporibus, saepe magni adipisci. Facere nostrum repudiandae maxime, quisquam recusandae
          magnam.
        </p>
        <div class="d-flex justify-content-end">
          <button class="me-3 custom-button bg-white">Sobre mí</button>
          <button class="custom-button bg-transparent">LinkedIn</button>
        </div>
      </div>

      <div class="position-relative w-50 d-none d-xl-flex">
        <div class="profile-container border border-2 border-dark project-1">
          <div class="header-card icon-code">
            
          </div>
          <div class="bg-white caption">Incognito NFT</div>
        </div>

        <div class="profile-container border border-2 border-dark project-2">
          <div class="header-card icon-site">
            
          </div>
          <div class="bg-white caption">Stash101</div>
        </div>

        <div class="profile-container border border-2 border-dark project-3">
          <div class="header-card icon-profile">
            
          </div>
          <div class="bg-white caption">Cryptocampo</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-1{
  position: absolute;
  background: url('../../public/incognito.png');
  background-size: cover;
  background-repeat: no-repeat;
  left: 40px;
  top: -10px;
}
.project-2{
 position: absolute;
 background: url('../../public/stash.png');
 background-size: cover;
 background-repeat: no-repeat;
 left: 180px;
 top: 50px;
}
.project-3{
 position: absolute;
 background: url('../../public/cryptocampo.png');
 background-size: cover;
 background-repeat: no-repeat;
 left: 320px;
 top: 110px;
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