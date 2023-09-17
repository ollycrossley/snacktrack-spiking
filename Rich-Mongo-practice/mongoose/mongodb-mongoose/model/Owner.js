import mongoose from "mongoose";
const { Schema, model } = mongoose;

const ownerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    minLength: 10,
    required: true,
  },
});

const Owner = model("Owner", ownerSchema);
export default Owner;
