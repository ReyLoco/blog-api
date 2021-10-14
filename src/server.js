import app from "./app";
import "./db/database";

/********** server.js *************/
app.listen(app.get("port"));
console.log("Server on port", app.get("port"));

/********** server.js *************/
