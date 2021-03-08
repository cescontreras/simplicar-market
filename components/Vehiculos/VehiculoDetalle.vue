<template>
  <div>
    <div class="detalle-breadcrumb">
      <b-link to="/vehiculos" id="tienda-link-icon">
        <b-icon-arrow-left class="ml-2"></b-icon-arrow-left>
      </b-link>
      <b-link to="/vehiculos" class="tienda-link">
        <strong>
          <p>VOLVER A LA TIENDA</p>
        </strong>
      </b-link>
      <p>/</p>
      <p class="breadcrumb-model">VERSA</p>
    </div>
    <div class="detalle-main">
      <div class="detalle-container">
        <div class="vehiculo-detalle">
          <h1>Modelo</h1>
          <h1>Precio</h1>
          <div class="carousel">
            <b-carousel
              id="carousel-1"
              v-model="slide"
              :interval="4000"
              controls
              indicators
              img-width="1024"
              img-height="480"
              style="text-shadow: 1px 1px 2px #333;"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <b-carousel-slide
                img-src="https://picsum.photos/1024/480/?image=58"
              ></b-carousel-slide>
            </b-carousel>
          </div>
          <div class="detalle-info">
            <div class="detalle-columna">
              <p><Fa icon="tachometer-alt"></Fa> Motor</p>
              <p><Fa icon="gas-pump"></Fa> Nafta</p>
            </div>
            <div class="detalle-columna">
              <p><Fa :icon="['far', 'file']"></Fa> Garantia</p>
              <p><Fa icon="car"></Fa> Sedan</p>
            </div>
          </div>
        </div>
          <Form />
      </div>
    </div>
  </div>
</template>

<script>
import Form from "./Form";

export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  components: { Form },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  },
  mounted() {
    console.log(this.$route.params.id);
  }
};
</script>

<style>
.detalle-main {
  margin: 0px 5vw;
}

.detalle-breadcrumb {
  width: 100%;
  height: 10vh;
  background-color: rgb(209, 209, 209);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 5vw;
}

.detalle-breadcrumb p {
  margin: 0px 10px;
}

.tienda-link {
  padding: 0px;
}

.tienda-link p {
  text-decoration: none;
  color: rgb(198, 25, 53);
}

#tienda-link-icon {
  color: rgb(198, 25, 53);
  text-decoration: none;
}

.breadcrumb-model {
  font-weight: 600;
  color: rgb(198, 25, 53);
}

.detalle-container {
  width: 100%;
  display: flex;
}

.vehiculo-detalle {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.carousel {
  padding-bottom: 5vh;
  border-bottom: solid 0.5px rgba(0, 0, 0, 0.5);
}

.detalle-info {
  width: 100%;
  display: flex;
}

.detalle-columna {
  width: 50%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: 20px;
  border-bottom: solid 0.5px rgba(0, 0, 0, 0.5);
  color: rgba(0, 0, 0, 0.5);
}

@media screen and (max-width: 800px) {
  .detalle-container {
    flex-direction: column;
  }

  .vehiculo-detalle {
    width: 100%;
  }
}

</style>
