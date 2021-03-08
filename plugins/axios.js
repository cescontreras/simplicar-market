export default function ({ $axios, error: nuxtError }) {
  $axios.onRequest(config => {
    $axios.setHeader('Accept', 'application/json')
    // $axios.setHeader('Authorization', 'Bearer qwertyuiopasdfghjklzxcvbnm123456')

    $axios.setToken('qwertyuiopasdfghjklzxcvbnm123456', 'Bearer')
  })
}