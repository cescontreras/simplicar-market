<template>
  <div class="container home">
    <div class="banner-content">
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

      </div>
    </div>
        <b-link to="vehiculos" class="banner-link">
          <b-button variant="danger" class="banner-btn">
            Ingresar a Nissan Store
            <b-icon-arrow-right class="ml-2"></b-icon-arrow-right>
          </b-button>
        </b-link>
  </div>
</template>

<script>
export default {
  name: "Home"
};
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
  flex-direction: column;
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

.banner-content {
  width: 100%;
}

.banner-text {
  width: 50%;
  height: 80vh;
  position: absolute;
  filter: blur(4px);
}

.text-content {
  margin: 10vh 5vw;
  width: 50%;
  height: 100%;
  text-align: left;
  text-shadow: 0px 0px 4px #e7e7e7;
  font-weight: 800;
}

.banner-btn {
  width: 50%;
  z-index: 1;
}

.banner-link {
  text-align: left;
  width: 100%;
  z-index: 1;
  margin: 0vh 5vw;

}

@media screen and (max-width: 800px) {
  .text-content {
    margin: 10vh 5vw;
    width: 100%;
  }
}
</style>
