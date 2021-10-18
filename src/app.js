import cors from "cors";
import express from "express";
import morgan from "morgan";
import config from "./config";
import ArticlesRoutes from "./routes/articulos.routes";
import UsersRoutes from "./routes/users.routes";
/********** APP *************/

const app = express();

// **** Settings ****
app.set("port", config.port || 3000);

app.use(express.json()); // Permite recibir y envirar archivos en formato JSON

// **** Middlewares ****
const corsOptions = {};
app.use(cors(corsOptions)); // Permite recibir peticiones de otro servidor (vacio, de cualquiera)
app.use(morgan("dev")); // Permite ver que peticiones al servidor llegan
app.use(express.urlencoded({ extended: false })); // Permite entender las peticiones que llegan con formulario

// **** Routes ****
app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

app.use("/api/users", UsersRoutes); // Establecemos la url base
app.use("/api/articles", ArticlesRoutes); // Establecemos la url base

export default app;

/********** APP *************/
