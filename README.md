# simplicar-market

## Instrucciones

```bash
# Instalar dependencias
$ npm install

# servidor con hot reload en localhost:3000
$ npm run dev
# Para poder hacer las request a la API desde un navegador es necesario utilizar un servidor proxy
$ npm run proxy

# build for production and launch server
$ npm run build
$ npm run start
$ npm run proxy

# generate static project
$ npm run generate
```
Aclaración.
El endpoint GET /product/{id} no retornaba correctamente la información de un auto según el id.
Por lo que decidí utilizar la información sobre cada auto que devuelve el endpoint GET /product.
