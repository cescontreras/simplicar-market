<template>
  <div class="vehiculos">
    <div class="vehiculos-header">
      <p><strong>¿CUAL VA A SER TU PRÓXIMO NISSAN?</strong></p>
    </div>
    <div class="vehiculos-filtros">
      <p>7 VEHICULOS</p>
      <div class="vehiculos-filtros-bottom">
        <b-dropdown id="dropdown-carroceria" text="CARROCERIA" class="m-md-2">
          <b-dropdown-item>1</b-dropdown-item>
          <b-dropdown-item>2</b-dropdown-item>
          <b-dropdown-item>3</b-dropdown-item>
        </b-dropdown>

        <b-dropdown id="dropdown-modelo" text="MODELO" class="m-md-2">
          <b-dropdown-item>1</b-dropdown-item>
          <b-dropdown-item>2</b-dropdown-item>
          <b-dropdown-item>3</b-dropdown-item>
        </b-dropdown>

        <b-dropdown id="dropdown-precio" text="PRECIO" class="m-md-2">
          <b-dropdown-item>1</b-dropdown-item>
          <b-dropdown-item>2</b-dropdown-item>
          <b-dropdown-item>3</b-dropdown-item>
        </b-dropdown>

        <b-dropdown id="dropdown-ordenar" text="ORDENAR POR" class="m-md-2">
          <b-dropdown-item>1</b-dropdown-item>
          <b-dropdown-item>2</b-dropdown-item>
          <b-dropdown-item>3</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
    <div class="vehiculos-catalogo">
      <VehiculoCard
        v-for="(vehiculo, index) in vehiculos"
        :key="vehiculo.id"
        :index="index"
        :vehiculo="vehiculo"
      />
    </div>
  </div>
</template>

<script>
import VehiculoCard from "./VehiculoCard";
import { mapState } from "vuex";

export default {
  name: "Vehiculos",
  components: { VehiculoCard },
  computed: {
    ...mapState({
      vehiculos: state => state.store.vehiculos
    })
  },
  async mounted() {
    this.$nextTick(async () => {
      this.$nuxt.$loading.start();
      await this.$store.dispatch("store/getVehiculos");
      console.log(this.vehiculos, "state");
      this.$nuxt.$loading.finish();
    });
  }
};
</script>

<style scoped>
.vehiculos {
  width: 100%;
}

.vehiculos-header {
  width: 100%;
  height: 20vh;
  background-color: rgb(204, 204, 204);
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 3vw;
}

.vehiculos-filtros {
  margin: 0vh 5vw;
}

.vehiculos-filtros-bottom {
  display: flex;
}

.vehiculos-catalogo {
  width: 100%;
  margin: 5vh 0vw;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

#dropdown-ordenar {
  align-self: flex-end;
}

@media screen and (max-width: 800px) {
  .vehiculos-catalogo {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
  }

  .vehiculos-header {
    height: 15vh;
  }

  .vehiculos-filtros {
    display: none;
  }
}
</style>
