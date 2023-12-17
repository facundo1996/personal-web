<template>
  <div class="d-flex flex-column justify-content-start align-items-center min-height-page bg-tiquewhite">


    <div class="container-page d-flex justify-content-center">

      <div class="form-conatiner">

        <h3 class="mb-5">Contactame.</h3>

        <form>
          <div class="form-group">
            <label class="label-form" for="exampleFormControlInput1">Nombre</label>
            <input type="email" class="form-control font-text" id="exampleFormControlInput1" placeholder="Facundo Benedetto">
          </div>

          <div class="form-group mt-4">
            <label class="label-form" for="exampleFormControlInput1">Email</label>
            <input type="email" class="form-control font-text" id="exampleFormControlInput1"
              placeholder="email@example.com">
          </div>

          <div class="form-group mt-4">
            <label class="label-form" for="exampleFormControlTextarea1">Mensaje</label>
            <textarea class="form-control font-text" id="exampleFormControlTextarea1" rows="3" style="min-height: 150px;"
              placeholder="Mensaje ..."></textarea>
          </div>
        </form>
        <div class="btn-form-container">
          <button class="btn custom-button bg-white mt-4 px-5">Enviar</button>
        </div>

        
      </div>

      <!-- <div class="social-container">
        <button class="btn-icon-social "><img class="icon-social" src="https://www.svgrepo.com/show/501210/github.svg" alt=""></button>
        <button class="btn-icon-social "><img class="icon-social" src="https://www.svgrepo.com/show/512419/linkedin-161.svg" alt=""></button>
        <button class="btn-icon-social "><img class="icon-social" src="https://www.svgrepo.com/show/117938/outlook-logo.svg" alt=""></button>
        <button class="btn-icon-social "><img class="icon-social" src="https://www.svgrepo.com/show/256562/curriculum-portfolio.svg" alt=""></button>
      </div> -->

    </div>



  </div>
</template>

<script lang="ts">
export default {
  name: 'Contact',

}
</script>
