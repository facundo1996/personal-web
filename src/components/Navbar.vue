<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light custom-navbar px-3 fixed-top">
    <div class="container-fluid navbar-container p-0">
      <a class="navbar-brand fs-3 title-navbar" href="#">Facundo Benedetto</a>
      <button class="navbar-toggler test" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse flex-grow-0" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link link-navbar active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link link-navbar active" aria-current="page" href="#">Proyectos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link link-navbar active" aria-current="page" href="#">Contacto</a>
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