<template>
  <div>
    <b-card
      no-body
      border-variant="light"
      style="max-width: 25rem;"
      img-src="https://placekitten.com/380/200"
      img-alt="Image"
      img-top
      align="center"
    >
      <template #header>
        <h4 class="mb-0">{{vehiculo.model + ' ' + vehiculo.name}}</h4>
      </template>

      <b-card-body class="vehiculo-precio">
        <b-card-text class="label-precio-1">
          PRECIO DESDE
        </b-card-text>
        <b-card-text class="label-precio-2">
          {{vehiculo.amount + ' ' + vehiculo.currency}}
        </b-card-text>
      </b-card-body>

      <b-list-group flush>
        <b-link to="vehiculos/id">
          <b-list-group-item class="nissan-color"
            >VER DETALLES DE MODELO
            <b-icon-arrow-right class="ml-2"></b-icon-arrow-right>
          </b-list-group-item>
        </b-link>
        <b-list-group-item class="vehiculo-footer"
          >Imagenes meramente ilustrativas</b-list-group-item
        >
      </b-list-group>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "VehiculoCard",
  data() {
    return{
      imgUrl: 'https://s3.sa-east-1.amazonaws.com/simplimotos-stg.com'
    }
  },
  props:{
    vehiculo: {
      type: Object,
      require: true,
      default: {}
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      if(this.vehiculo){
        this.$nuxt.$loading.finish()
      }
    })
  }
};
</script>

<style scoped>
.nissan-color {
  color: rgb(198, 25, 53);
}

.vehiculo-precio {
  display: flex;
  justify-content: space-around;
}

.label-precio-1 {
  opacity: 0.7;
  font-size: small;
  font-weight: 600;
}

.label-precio-2 {
  font-size: large;
  font-weight: 600;
}

.vehiculo-footer {
  opacity: 0.5;
  font-size: small;
  font-style: italic;
}
</style>
