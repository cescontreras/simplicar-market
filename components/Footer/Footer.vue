<template>
  <div class="footer">
    <div class="footer-top">
      <div class="footer-content">
        <h4>Nissan. Innovation that excites</h4>
        <div class="etiquetas-footer">
          <div class="etiqueta">
            <p>COTIZACIÓN DE VEHICULOS</p>
          </div>
          <div class="etiqueta">
            <p>RALITOR S.A</p>
          </div>
          <div class="etiqueta">
            <p>AYUDA AL CLIENTE</p>
          </div>
          <div class="etiqueta">
            <p>NISSAN SOCIAL</p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>
        &copy;2020 SIMPLICAR. Todos los derechos reservados
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.footer {
  width: 100%;
  height: 30vh;
  background-color: black;
}

.footer-top {
  height: 80%;
  color: rgb(170, 170, 170);
}

.footer-content {
  height: 100%;
  margin: 0 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.footer-bottom {
  height: 20%;
  border-top: solid 0.5px rgba(255, 255, 255, 0.3);
}

.footer-bottom p {
  margin: 0px 5vw;
}

.etiquetas-footer {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.etiqueta {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

@media screen and (max-width: 600px) {
  .etiquetas-footer {
    display: none;
  }
}
</style>
