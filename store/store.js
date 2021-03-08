const PROXY_URL = "http://localhost:8010/proxy"

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
      const vehiculos = await this.$axios.$get(`${PROXY_URL}/product`);
      console.log(vehiculos, 'respondio');      
      commit("setVehiculos", vehiculos.results);
    } catch (error) {
      console.log(error);  
    }    
  },
  async getVehiculo({ commit }, id) {
    try {
      console.log('entro');
      const vehiculo = await this.$axios.$get(`${PROXY_URL}/product/${id}`);
      console.log(vehiculo, 'respondio');
      
      commit("setVehiculo", vehiculo);
    } catch (error) {
      console.log(error);  
    }    
  },
  async lead({ commit }, userInfo) {
    try {
      console.log('entro');
      const res = await this.$axios.$post(`${PROXY_URL}/lead`, userInfo);
      console.log(res);
    } catch (error) {
      console.log(error);  
    }    
  },

};
