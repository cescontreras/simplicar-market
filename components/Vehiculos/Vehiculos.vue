<template>
  <div class="vehiculos">
    <div class="vehiculos-header">
      <h1><strong>¿CUAL VA A SER TU PRÓXIMO NISSAN?</strong></h1>
    </div>
    <div class="vehiculos-catalogo">
      <VehiculoCard />
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
  mounted() {
    // console.log(this.vehiculos);
    this.$store.dispatch('store/getVehiculos')
    
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
  background-color: rgb(226, 226, 226);
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.vehiculos-catalogo {
  margin-top: 5vh;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>
