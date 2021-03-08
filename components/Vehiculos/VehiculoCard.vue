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
        <h4 class="mb-0">car model</h4>
      </template>

      <b-card-body class="vehiculo-precio">
        <b-card-text class="label-precio-1">
          PRECIO DESDE
        </b-card-text>
        <b-card-text class="label-precio-2">
          PRECIO
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
  name: "VehiculoCard"
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
