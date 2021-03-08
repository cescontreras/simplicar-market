<template>
  <div class="container home">
    <div class="banner">
      <b-img-lazy
        fluid
        src="@/assets/img/Nissan-lineup.png"
        alt="Nissan Cars"
        id="banner"
      ></b-img-lazy>
      <div class="banner-text"></div>
      <div class="text-content">
        <h1>AHORA ES ONLINE</h1>
        <p>
          <strong
            >Con Nissan store podes acceder a tu nuevo 0km con todos los
            servicios asociados desde la comodidad de tu sofá.</strong
          >
        </p>
        <p><strong>Probanos!</strong></p>
        <b-link to="vehiculos">
          <b-button variant="danger" class="banner-btn"
            >Ingresar a Nissan Store <b-icon-arrow-right class="ml-2"></b-icon-arrow-right>
          </b-button>
        </b-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
.container {
  width: 100%;
  margin: 0 0vw 5vw 5;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.home {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

#banner {
  position: absolute;
  z-index: -1;
  top: 30vh;
  left: 0;
}

.banner {
  width: 100%;
}

.banner-text {
  width: 50%;
  height: 80vh;
  position: absolute;
  filter: blur(4px);
  background-color: rgba(255, 255, 255, 0.3);
  /* backdrop-filter: blur(1px); */

}

.text-content {
  margin: 10vh 5vw;
  width: 50%;
  height: 100%;
  backdrop-filter: blur(1px);
  text-align: left;
}

.banner-btn {
  width: 50%;
}

@media screen and (max-width: 800px) {
  .text-content {
    margin: 10vh 5vw;
    width: 100%;
  }
}

</style>