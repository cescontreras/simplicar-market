const GET_URL = "https://4my1q6hsyo.api.quickmocker.com";

export const state = () => ({
  vehiculos: [],
  vehiculo: {}
});

export const mutations = {
  setVehiculos(state, payload) {
    state.vehiculos = payload;
  },
  setVehiculo(state, payload) {
    state.vehiculo = payload;
  }
};

export const actions = {
  async getVehiculos({ commit }) {
    try {
      console.log('entro');
      const vehiculos = await this.$axios.$get(`${GET_URL}/product`);
      console.log(vehiculos, 'respondio');      
      // commit("setVehiculos", vehiculos);
    } catch (error) {
      console.log(error);  
    }    
  },
  async getVehiculo({ commit }, id) {
    try {
      console.log('entro');
      const vehiculo = await this.$axios.$get(`product/${id}`);
      console.log(vehiculo, 'respondio');
      
      // commit("setVehiculo", vehiculo);
    } catch (error) {
      console.log(error);  
    }    
  },
  async lead({ commit }, userInfo) {
    try {
      console.log('entro');
      const res = await this.$axios.$post("/lead", userInfo);
      console.log(res);
      
      // commit("setVehiculos", vehiculos);
    } catch (error) {
      console.log(error);  
    }    
  },

};
