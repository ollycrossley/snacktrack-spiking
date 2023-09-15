import mongoose from "mongoose";
const { Schema, model, SchemaTypes } = mongoose;

const restaurantSchema = new Schema({
  owner: {
    type: SchemaTypes.ObjectId,
    ref: "Owner",
    required: true,
  },
  address: {
    building: Number,
    coord: Array,
    street: String,
    zipcode: String,
  },
  borough: {
    type: String,
    required: true,
  },
  updated: Date,
  cuisine: String,
  grades: [{ date: Date, grade: String, score: Number }],
  name: String,
  restaurant_id: String,
});

restaurantSchema.pre("save", function (next) {
  this.updated = Date.now(); // update the date every time a blog post is saved
  next();
});

const Restaurant = model("Restaurant", restaurantSchema);
export default Restaurant;
