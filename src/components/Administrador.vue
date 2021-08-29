<template>
  <div>
    <header
      class="masthead"
      style="background-image: url('assets/img/home-bg.jpg')"
    >
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-8 mx-auto">
            <div class="site-heading">
              <h1 >{{saludo}}</h1>
              <span class="subheading">Administrador</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  props:["tipo"]
  ,
  computed: {
    saludo() {
      
      switch (this.tipo) {
        case 'simple' :
          return "Bienvenido a la página de Administración";
        case 'avanzado' :
          return "Esta página de administración está en construcción. Intente como administrador simple";
        default:
          return "la pagina no existe";
      }
      
    },
  },
};
</script>
