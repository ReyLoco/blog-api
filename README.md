# BLOG-API.

This is an API aplication to learn and practice Node.js, API REST and MongoDB.

Esta es una aplicación para el aprendizaje y práctica de Node.js, API REST and MongoDB.

## Notes / Notas.

This project has been coded following the instructions of Fazt Code in his video [Node & Mongodb REST API más Deploy, Dominio y SSL (usando Clouding.io)](https://www.youtube.com/watch?v=HEx2lVokPu0).

Este projecto ha sido creado siguiendo las instrucciones de Fazt Code en su video [Node & Mongodb REST API más Deploy, Dominio y SSL (usando Clouding.io)](https://www.youtube.com/watch?v=HEx2lVokPu0).

---

## Project Development / Desarrollo del Projecto.

Inicio del projecto:  
_`npm init -y`_

### Installed Modules / Módulos instalados.

**_express:_**  
Módulo inicial para el projecto que permite usar el servidor.  
_`npm i express`_

**_@babel/core:_**  
Traduce código JS moderno a código antiguo (sostenido por todos los navegadores). Permite el uso de imports, funciones arrow...  
_`npm i @babel/core @babel/cli @babel/node @babel/preset-env @babel/plugin-transform-runtime -D`_

**_nodemon:_**  
Modulo que permite el reinicio del servidor tras cambios en el código de los archivos.  
_`npm i nodemon -D`_

**_mongoose:_**  
Módulo que permite la conexión a la BD MongoDB.  
_`npm i mongoose`_

**_dotenv:_**  
Permite el uso de variables de entorno dónde declarar datos del servidor o BD.  
_`npm i dotenv`_

**_morgan:_**  
Permite visualizar por consola las llamadas que recibe el servidor.  
_`npm i morgan`_

**_cors:_**  
Permite la comunicaciones entre servidores.  
_`npm i cors`_

**_mongoose-paginate-v2:_**  
Permite la paginación de resultados de las consultas a la BD.  
_`npm i mongoose-paginate-v2`_

**_pm2_**  
Permite mantener la ejecución de la aplicación en el servidor. Solo se instala en el proyecto en el servidor. Consultar página oficial de [PM2](https://pm2.keymetrics.io/docs/usage/process-management/) para conocer comandos de uso.
_`npm i pm2`_

---
### Algunos comandos para el servidor.

`npm run build` Permite construir el proyecto en la carpeta Dist.

`pm2 start dist/server.js` Permite arrancar el servidor para que se ejecute constantemente.

`pm2 stop server` Permite detener el servidor.

---

## How to Use / Uso de la API.

### Users / Usuarios.

_POST:_ &nbsp; &nbsp; &nbsp; `api/users/` Creates a new user. / Crea un usuario nuevo.  
_GET:_ &nbsp; &nbsp; &nbsp; &nbsp; `api/users/` Get users list. / Obtener la lista de usuarios.  
_GET:_ &nbsp; &nbsp; &nbsp; &nbsp; `api/users/?size=0&page=0&name=xxxxx` Get users list with pagination and filter. / Obtener la lista de usuarios con paginación y filtro.  
_GET:_ &nbsp; &nbsp; &nbsp; &nbsp; `api/users/:id` Get an user by Id. / Obtener un usuario por Id.  
_GET:_ &nbsp; &nbsp; &nbsp; &nbsp; `api/users/find/:text` Get an users list corresponding in name or surname by one text. / Obtener una lista de usuarios que corresponda en nombre o apellido con un texto.  
_DELETE:_ &nbsp; `api/users/:id` Delete an user. / Eliminar un usuario.  
_PUT:_ &nbsp; &nbsp; &nbsp; &nbsp;`api/users/:id` Update an user. / Modificar un usuario.

```
User {
  name: { String, required },
  surname: { String, required },
  email: { String, required },
  password: { String, required },
  address: { String },
  location: { String },
  province: { String },
  country: { String },
  phone: { String },
  birthdate: { Date },
  timestamps: true,
}
```

### Articles / Articulos.

_POST:_ &nbsp; &nbsp; &nbsp;`api/articles/` Create a new article. / Crear un articulo.  
_GET:_ &nbsp; &nbsp; &nbsp; &nbsp; `api/articles/` Get articles list. / Obtener la lista de articulos.  
_GET:_ &nbsp; &nbsp; &nbsp; &nbsp; `api/articles/size=0?page=0?title=xxxxx` Get articles list with pagination and filter. / Obtener la lista de artículos con paginación y filtro.  
_GET:_ &nbsp; &nbsp; &nbsp; &nbsp; `api/articles/:id` Get an article by Id. / Obtener un articulo por Id.  
_GET:_ &nbsp; &nbsp; &nbsp; &nbsp; `api/articles/find/:text` Get an articles list corresponding in title or text by one text. / Obtener una lista de articulos cuyo titulo o texto contenga otro texto.  
_DELETE:_ &nbsp; `api/articles/:id` Delete an article. / Eliminar un articulo.  
_PUT:_ &nbsp; &nbsp; &nbsp; &nbsp;`api/articles/:id` Update an article. / Modificar un articulo.

```
Article {
    title: { String, required },
    text: { String, required },
    author: { String },
    timestamps: true,
  }
```
