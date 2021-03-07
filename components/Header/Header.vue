<template>
  <b-navbar variant="faded" type="light" class="nav-bar">
    <div class="nav-brand">
      <b-navbar-brand href="#">
        <b-link to="/">
          <img src="@/assets/img/logo.png" alt="Kitten" id="logo" />
        </b-link>
      </b-navbar-brand>

      <b-navbar-nav>
        <b-nav-item to="/vehiculos" class="nav-link">
          <strong>VEHICULOS</strong>
          </b-nav-item>
        <b-nav-item href="#" class="nav-link"
          ><strong>DESCUBRI NISSAN</strong></b-nav-item
        >
      </b-navbar-nav>
    </div>

    <div class="nav-brand-mobile">
      <b-navbar-brand href="#">
        <img src="@/assets/img/logo.png" alt="Kitten" id="logo" />
      </b-navbar-brand>
      <p class="h3 mb-2">
        <b-icon-list
          v-b-toggle.sidebar-backdrop
          style="cursor: pointer;"
        ></b-icon-list>
      </p>
    </div>

    <b-sidebar id="sidebar-backdrop" title="NISSAN" backdrop shadow>
      <b-nav-item href="#" class="nav-link">
        <strong>VEHICULOS</strong></b-nav-item
      >
      <b-nav-item href="#" class="nav-link"
        ><strong>DESCUBRI NISSAN</strong></b-nav-item
      >
    </b-sidebar>

    <b-nav-form class="nav-form">
      <b-input-group-prepend>
        <p class="h4 mb-2">
          <b-icon-search class="search-icon ml-lg-2"></b-icon-search>
        </p>
      </b-input-group-prepend>
      <b-form-input
        size="lg"
        class="mr-sm-2 mr-lg-12 search-input"
        placeholder="   BUSCAR POR MODELO O VEHICULO"
      >
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

.search-input::placeholder {
  font-size: 15px;
  color: rgba(0, 0, 0, 0.3);
}

.search-icon {
  position: absolute;
}

.nav-brand-mobile {
  display: none;
}

@media screen and (max-width: 800px) {
  .nav-form {
    display: none;
  }

  .nav-brand {
    display: none;
  }

  .nav-brand-mobile {
    height: 100%;
    width: 100%;
    margin: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .nav-mobile {
    display: none;
  }
}
</style>
