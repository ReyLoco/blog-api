# BLOG-API.

This is an API aplication to learn and practice Node, API REST and MongoDB.

Esta es una aplicación para el aprendizaje y práctica de Node, API REST and MongoDB.

## Notes / Notas.

This project has been coded following the instructions of Fazt Code in his video [Node & Mongodb REST API más Deploy, Dominio y SSL (usando Clouding.io)](https://www.youtube.com/watch?v=HEx2lVokPu0).

Este projecto ha sido creado siguiendo las instrucciones de Fazt Code en su video [Node & Mongodb REST API más Deploy, Dominio y SSL (usando Clouding.io)](https://www.youtube.com/watch?v=HEx2lVokPu0).

---

## Project Development / Desarrollo del Projecto.

Inicio del projecto: `npm init -y`

### Installed Modules / Módulos instalados.

**_express:_**  
Módulo inicial para el projecto que permite usar el servidor. `npm i express`

**_@babel/core:_**  
Traduce código JS moderno a código antiguo (sostenido por todos los navegadores). Permite el uso de imports, funciones arrow... `npm i @babel/core @babel/cli @babel/node @babel/preset-env @babel/plugin-transform-runtime -D`

**_nodemon:_**  
Modulo que permite el reinicio del servidor tras cambios en el código de los archivos. `npm i nodemon -D`

**_mongoose:_**  
Módulo que permite la conexión a la BD MongoDB. `npm i mongoose`

**_dotenv:_**  
Permite el uso de variables de entorno dónde declarar datos del servidor o BD. `npm i dotenv`

**_morgan:_**  
Permite visualizar por consola las llamadas que recibe el servidor. `npm i morgan`

**_cors:_**  
Permite la comunicaciones entre servidores. `npm i cors`

**_mongoose-paginate-v2:_**  
Permite la paginación de resultados de las consultas a la BD. `npm i mongoose-paginate-v2`

---

## How to Use / Uso de la API.

### Users / Usuarios.

_POST_ `api/users/` Create a new user. / Crear un usuario.  
_GET_ `api/users/` Get users list / Obtener la lista de usuarios.  
_GET_ `api/users/size=0?page=0?name=xxxxx` Get users list with pagination and filter/ Obtener la lista de usuarios con paginación y filtro.  
_GET_ `api/users/:id` Get an user by Id / Obtener un usuario por Id.  
_GET_ `api/users/find/:text` Get an users list corresponding in name or surname by one text. / Obtener una lista de usuarios que corresponda en nombre o apellido con un texto.  
_DELETE_ `api/users/:id` Delete an user / Eliminar un usuario.  
_PUT_ `api/users/:id` Update an user / Modificar un usuario.

```
User {
  name: { String, required },
  surname: { String, required },
  email: { String, required },
  password: { String, required },
  timestamps: true,
}
```

### Articles / Articulos.

_POST_ `api/articles/` Create a new article. / Crear un articulo.  
_GET_ `api/articles/` Get articles list / Obtener la lista de articulos.  
_GET_ `api/articles/size=0?page=0?title=xxxxx` Get articles list with pagination and filter/ Obtener la lista de artículos con paginación y filtro.  
_GET_ `api/articles/:id` Get an article by Id / Obtener un articulo por Id.  
_GET_ `api/articles/find/:text` Get an articles list corresponding in title or text by one text. / Obtener una lista de articulos cuyo titulo o texto contenga otro texto.  
_DELETE_ `api/articles/:id` Delete an article / Eliminar un articulo.  
_PUT_ `api/articles/:id` Update an article / Modificar un articulo.

```
Article {
    title: { String, required },
    text: { String, required },
    author: { String },
    timestamps: true,
  }
```
