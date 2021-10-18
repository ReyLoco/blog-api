import { config } from "dotenv";
/********** config.js *************/

config();

export default {
  mongodbURL: process.env.MONGODB_URI,
  port: process.env.PORT,
};

/********** config.js *************/
