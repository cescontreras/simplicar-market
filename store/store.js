const GET_URL = "https://4my1q6hsyo.api.quickmocker.com/product";
const LEAD_URL = "https://4my1q6hsyo.api.quickmocker.com/lead";


export const state = () => ({
  vehiculos: [],
  vehiculo: {},
  imagenes: {}
});

export const mutations = {
  setVehiculos(state, payload) {
    state.vehiculos = payload;
  },
  setVehiculo(state, payload) {
    state.vehiculo = payload;
  },
  setImagenes(state, payload) {
    state.imagenes = payload;
  }
};

export const actions = {
  async getVehiculos({ commit }) {
    try {
      console.log('entro');
      const vehiculos = await this.$axios.$get(GET_URL);
      console.log(vehiculos);
      
      // commit("setVehiculos", vehiculos);
    } catch (error) {
      console.log(error);
      
      
    }
    
  }
};
