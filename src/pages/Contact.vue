<template>
  <div data-aos="fade-zoom" :data-aos-duration="1000"
    class="d-flex flex-column justify-content-start align-items-center min-height-page bg-tiquewhite">

    <div class="container-page d-flex flex-column align-items-center justify-content-start">

      <div class="form-conatiner">
        <h3 class="mb-md-5 mb-2">Contactame</h3>
        <p class="mb-md-5 mb-2 text-social">Agenda mi email: <b>facundobenedetto2@outlook.com</b></p>

        <form id="form">
          <div class="form-group">
            <label class="label-form" for="name">Nombre</label>
            <input required type="text" class="form-control font-text" id="name" v-model="name" name="name"
              placeholder="Facundo Benedetto">
          </div>

          <div class="form-group mt-4">
            <label class="label-form" for="email">Email</label>
            <input required type="email" class="form-control font-text" id="email" v-model="email" name="email"
              placeholder="email@example.com">
          </div>

          <div class="form-group mt-4">
            <label class="label-form" for="message">Mensaje</label>
            <textarea class="form-control font-text" id="message" v-model="message" name="message" rows="3"
              style="min-height: 150px;" placeholder="Mensaje ..."></textarea>
          </div>
          
          <div v-if="error" class="alert alert-danger text-center mt-3" role="alert">
            {{ error }}
          </div>
          <div class="btn-form-container">
            <!-- <div class="g-recaptcha" :data-sitekey="PUBLIC_RECAPTCHA"></div> -->
            <button :disabled="buttonDisabled" type="submit" class="btn custom-button bg-white mt-4 px-5"
              v-on:click="sendEmail">Enviar</button>
          </div>
        </form>
      </div>
    </div>



  </div>
</template>

<script lang="ts">
import emailjs from '@emailjs/browser';

export default {
  data() {
    return {
      name: "",
      message: "",
      email: "",
      error: '',
      SERVICE_ID: import.meta.env.VITE_CO_SERVICE_ID,
      TEMPLATE_ID: import.meta.env.VITE_CO_TEMPLATE_ID,
      KEY_PUBLIC: import.meta.env.VITE_CO_KEY_PUBLIC,
      buttonDisabled: false,
      PUBLIC_RECAPTCHA: import.meta.env.VITE_KEY_PUBLIC_RECAPTCHA,
      RECAPTCHA: import.meta.env.VITE_KEY_RECAPTCHA,

    }
  },
  name: 'Contact',
  mounted() {

  },
  methods: {
    sendEmail(e: any) {
      
      e.preventDefault()
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.name) {
        this.error = "El nombre no es válido."
        return
      }
      if (!this.email || !emailPattern.test(this.email)) {
        this.error = 'El email no es válido.'
        return
      }
      this.error = ""
      this.buttonDisabled = true
      emailjs.send(this.SERVICE_ID,this.TEMPLATE_ID,{
        name: this.name,
        message: this.message,
        email: this.email
      }, this.KEY_PUBLIC);
    }
  }

}
</script>
