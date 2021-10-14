import mongoose from "mongoose";
import config from '../config'
/********** database.js *************/
// const URI = process.env.MONGODB_URI;


(async () => {
  const db = await mongoose.connect(config.mongodbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    bufferCommands: false,
  });
  console.log("Conectado con BD:" + db.connection.name);
})();

/********** database.js *************/
