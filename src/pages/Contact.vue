<template>
  <div data-aos="fade-zoom" :data-aos-duration="700" class="d-flex flex-column justify-content-start align-items-center min-height-page bg-tiquewhite">


    <div class="container-page d-flex flex-column align-items-center justify-content-start">

      <div class="form-conatiner">
        <h3 class="mb-md-5 mb-2">Contactame</h3>
        <p class="mb-md-5 mb-2 text-social">También puede agendar mi email: <b>facundobenedetto2@outlook.com</b></p>

        <form id="form">
          <div class="form-group">
            <label class="label-form" for="name">Nombre</label>
            <input type="email" class="form-control font-text" id="name" v-model="name" name="name" placeholder="Facundo Benedetto">
          </div>

          <div class="form-group mt-4">
            <label class="label-form" for="email">Email</label>
            <input type="email" class="form-control font-text" id="email" v-model="email" name="email" placeholder="email@example.com">
          </div>

          <div class="form-group mt-4">
            <label class="label-form" for="message">Mensaje</label>
            <textarea class="form-control font-text" id="message" v-model="message" name="message" rows="3" style="min-height: 150px;"
              placeholder="Mensaje ..."></textarea>
          </div>
        </form>
        <div class="btn-form-container">
          <button class="btn custom-button bg-white mt-4 px-5" v-on:click="sendEmail">Enviar</button>
        </div>
      </div>
    </div>



  </div>
</template>

<script lang="ts">
import emailjs from '@emailjs/browser';
export default {
  data(){
    return {
      name: "",
      message: "",
      email: "",
    }
  },
  name: 'Contact',
  methods: {
    sendEmail() {
      console.log("aseas")
      emailjs.send("service_phjc9cs","template_c7p4cy8",{
        name: this.name,
        message: this.message,
        email: this.email
      }, 'j-Uuf5D2B0nwery5p');
    }
  }

}
</script>
