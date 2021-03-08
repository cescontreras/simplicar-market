<template>
  <div class="detalle-form">
    <h1 class="mt-4">INGRESÁ TUS DATOS</h1>
    <p>
      Por favor completá el siguiente formulario para que uno de nuestros
      asesores se pueda contactar contigo
    </p>
    <div class="form">
      <b-form-group
        id="fullname"
        class="form-input"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          size="lg"
          class="input"
          v-model="fullname"
          trim
          placeholder="NOMBRE Y APELLIDO"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="email"
        :invalid-feedback="invalidFeedback"
        :state="state"
        class="form-input"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          size="lg"
          class="input"
          v-model="email"
          :state="state"
          trim
          placeholder="CORREO ELECTRÓNICO"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="phone" class="form-input"
        label-for="input-3">
        <b-form-input
          id="input-3"
          size="lg"
          class="input"
          v-model="phone"
          trim
          placeholder="TELÉFONO"
        ></b-form-input>
      </b-form-group>

      <b-button block class="form-btn">ENVIARME LA COTIZACIÓN POR EMAIL</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
  computed: {
    state() {
      if (!this.email) {
        return null;
      } else {
        return /\S+@\S+\.\S+/.test(this.email);
      }
    },
    invalidFeedback() {
      if (/\S+@\S+\.\S+/.test(this.email)) {
        return "Email no valido";
      }
    }
  },
  data() {
    return {
      email: "",
      fullname: "",
      phone: "",
      product: this.$route.params.id
    };
  }
};
</script>

<style scoped>
.detalle-form {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0px 5vw;
}

.form {
  width: 100%;
  margin-top: 5vh;
}

.form-input {
  width: 100%;
}

.input {
  margin: 3vh 0px;
  border-radius: 10px;
}

.form-input ::placeholder {
  font-size: small;
  color: rgba(0,0,0,0.5);
}

.form-btn {
  margin-top: 5vh;
  color: white;
  background-color: rgb(198, 25, 53);
}

@media screen and (max-width: 800px) {
  .detalle-form {
    width: 100%;
    margin: 0 3vw 3vh 3vw;
  }
}
</style>
