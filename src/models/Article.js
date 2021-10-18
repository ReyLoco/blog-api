import { model, Schema } from "mongoose";
import mongoosePaginate  from 'mongoose-paginate-v2'
import * as Cnt from "../constants";
/********** Article.js *************/

const articleSchema = new Schema(
  {
    title: { type: String, required: [true, Cnt.ER_AR_TITLE_REQ] },
    text: { type: String, required: [true, Cnt.ER_AR_TEXT_REQ] },
    author: { type: String, required: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

articleSchema.plugin(mongoosePaginate);

export default model("Article", articleSchema);

/********** Article.js *************/
