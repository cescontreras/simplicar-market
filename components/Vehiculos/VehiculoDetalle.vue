<template>
  <div class="detalle-gral">
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
      <p class="breadcrumb-model">{{ vehiculo.model.toUpperCase() }}</p>
    </div>
    <div class="detalle-main">
      <div class="detalle-container">
        <div class="vehiculo-detalle">
          <h1>{{ vehiculo.model + " " + vehiculo.name }}</h1>
          <h1>{{ vehiculo.amount + " " + vehiculo.currency.toUpperCase() }}</h1>
          <div class="carousel">
            <b-carousel
              id="carousel-1"
              v-model="slide"
              interval="3000"
              controls
              indicators
              background="#000000"
              img-width="1024"
              img-height="480"
              no-animation
            >
              <b-carousel-slide
                :img-src="`${imgUrl}${vehiculo.gallery[0].large}`"
              ></b-carousel-slide>
              <b-carousel-slide
                :img-src="`${imgUrl}${vehiculo.gallery[1].large}`"
              ></b-carousel-slide>
              <b-carousel-slide
                :img-src="`${imgUrl}${vehiculo.gallery[2].large}`"
              ></b-carousel-slide>
              <b-carousel-slide
                :img-src="`${imgUrl}${vehiculo.gallery[3].large}`"
              ></b-carousel-slide>
            </b-carousel>
          </div>
          <div class="detalle-info ml-4 mr-2">
            <div class="detalle-columna">
              <p><Fa icon="tachometer-alt"></Fa> {{ vehiculo.detail.characteristics.engine }}</p>
              <p><Fa icon="gas-pump"></Fa> {{ vehiculo.detail.characteristics.gas_type }}</p>
            </div>
            <div class="detalle-columna">
              <p><Fa :icon="['far', 'file']"></Fa> {{ vehiculo.detail.characteristics.warranty }}</p>
              <p><Fa icon="car"></Fa> {{ vehiculo.detail.characteristics.body }}</p>
            </div>
          </div>
          <b-link :href="vehiculo.specs.description" class="tienda-link">
            <strong>
              <p>VER TODAS LAS CARACTERISTICAS</p>
            </strong>
          </b-link>
        </div>
        <Form />
      </div>
    </div>
  </div>
</template>

<script>
import Form from "./Form";
import { mapState } from "vuex";
export default {
  components: { Form },
  data() {
    return {
      slide: 0,
      sliding: null,
      imgUrl: "https://s3.sa-east-1.amazonaws.com/simplimotos-stg.com/"
    };
  },
  props: {
    vehiculo: {
      type: Object
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>

<style scoped>
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
  border-bottom: solid 0.5px rgba(0, 0, 0, 0.5);
  color: black;
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
  font-size: 1rem;
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

  .detalle-gral {
    margin: 0px;
    padding: 0px;
  }
}
</style>
