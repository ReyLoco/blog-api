import mongoose from "mongoose";
import config from "../config";
/********** database.js *************/

(async () => {
  try {
    const db = await mongoose.connect(config.mongodbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
    });
    console.log("Conectado con BD:" + db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();

/********** database.js *************/
