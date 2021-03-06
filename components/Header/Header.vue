<template>
  <b-navbar variant="faded" type="light" class="nav-bar">
    <div class="nav-brand">
      <b-navbar-brand href="#">
        <img src="@/assets/img/logo.png" alt="Kitten" id="logo" />
      </b-navbar-brand>

      <b-navbar-nav>
        <b-nav-item href="#"> <strong>VEHICULOS</strong></b-nav-item>
        <b-nav-item href="#"><strong>DESCUBRI NISSAN</strong></b-nav-item>
      </b-navbar-nav>
    </div>

    <b-nav-form class="nav-form">
      <b-form-input
        size="lg"
        class="mr-sm-2 mr-lg-12 search-input"
        placeholder="BUSCAR POR MODELO O VEHICULO"
      >
      <b-icon-search></b-icon-search>
      </b-form-input>
    </b-nav-form>
  </b-navbar>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.navbar {
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}

.nav-brand {
  height: 100%;
  width: 50%;
  margin: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.nav-form {
  height: 100%;
  width: 50%;
  margin: 0;
  display: flex;
  justify-content: flex-end;
}

#logo {
  height: 15vh;
}

.search-input {
  width: 20vw;
}

.search-input::placeholder{
  font-size: 15px;
}
</style>
