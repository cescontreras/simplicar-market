export default function ({ $axios, error: nuxtError }) {
  $axios.setHeader('Authorization', 'Bearer qwertyuiopasdfghjklzxcvbnm123456')
  $axios.onError(error => {
    nuxtError({
      statusCode: error.response.status,
      message: error.message,
    });
    return Promise.resolve(false);
  })
}