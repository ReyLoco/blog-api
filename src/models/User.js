import { model, Schema } from "mongoose";

const UserSchema = new Schema({
  name: { type: String, required: true, trim: true },
  surname: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
},{
  versionKey: false,
  timestamps: true
});

export default model("User", UserSchema);
