## paso a paso
- verificar version de node : node -v
- inicializar el proyecto : npm init
- crea el package.json
- cambiamos esta linea :  "type": "module", para poder implemnetar modules de ES6
- paquetes basicos : npm i nodemon cors express mysql2
    - nodemon : solo para desarrollar! sirve para cambiar el codigo y que se actualice
    - cors: setear la seguridad de interactuar con direcciones ip diferentes - http
    - express : libreria para crear un servidor rest (post,put, get, delete)
    - mysql2: libreria que permite hacer consultas SQL desde NODEJS

- Cambiamos la seccion script en package.json asi:
  "dev": "nodemon index.js",
  "start": "node index.js",
  con el fin de tener 2 scripts de ejecucion, uno de desarrollo y uno de produccion(despliegue)