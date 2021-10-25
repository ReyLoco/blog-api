import { model, Schema } from "mongoose";
import mongoosePaginate  from 'mongoose-paginate-v2'
import * as Cnt from "../constants";
/********** User.js *************/

const userSchema = new Schema(
  {
    name: { type: String, required: [true, Cnt.ER_US_NAME], trim: true },
    surname: { type: String, required: [true, Cnt.ER_US_SURNAME], trim: true },
    email: { type: String, required: [true, Cnt.ER_US_EMAIL], trim: true },
    password: { type: String, required: [true, Cnt.ER_US_PASS], trim: true },
    address: { type: String, required: false, trim: true },
    location: { type: String, required: false, trim: true },
    province: { type: String, required: false, trim: true },
    country: { type: String, required: false, trim: true },
    phone: { type: String, required: false, trim: true },
    birthdate: { type: Date, required: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

userSchema.plugin(mongoosePaginate);

export default model("User", userSchema);

/********** User.js *************/
