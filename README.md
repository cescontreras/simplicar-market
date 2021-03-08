# simplicar-market

## Instrucciones

```bash
# Instalar dependencias
$ npm install

# Servidor con hot reload en localhost:3000
$ npm run dev
# Para poder hacer las request a la API desde un navegador es necesario utilizar un servidor proxy
$ npm run proxy

La app corre en ```http://localhost:3000``` y el servidor del proxy en ```http://localhost:8010/proxy```

# Produccion
$ npm run build
$ npm run start
$ npm run proxy

```
Aclaración.
El endpoint GET /product/{id} no retornaba correctamente la información de un auto según el id.
Por lo que decidí utilizar la información sobre cada auto que devuelve el endpoint GET /product.
