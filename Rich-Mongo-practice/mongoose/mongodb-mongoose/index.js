import mongoose from "mongoose";
import Restaurant from "/home/rich/northcoders/projects/SnackTrack/spiking/snacktrack-spiking/Rich-Mongo-practice/mongoose/mongodb-mongoose/model/Restaurant.js";
import Owner from "/home/rich/northcoders/projects/SnackTrack/spiking/snacktrack-spiking/Rich-Mongo-practice/mongoose/mongodb-mongoose/model/Owner.js";

const uri =
  "mongodb+srv://SnackTrack:TestTest@testdatabase.pkbcgcp.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri);

const owner = await Owner.create({
  name: "Jim",
  phone: "07777777777",
});

// Create a new blog post object
const article = await Restaurant.create({
  updated: Date.now(),
  owner: owner._id,
  borough: "Manchester",
  cuisine: "ice cream",
  name: "Jim's Mornings",
});

article.grades = [{ date: Date.now(), grade: "B", score: 8 }];
await article.save();
// Insert the article in our MongoDB database

const firstArticle = await Restaurant.findOne().populate("owner");
console.log(firstArticle);

const thing = await Restaurant.findById("65045475020c536c5718a301").exec();

thing.name = "Jim's Evenings";
await thing.save();
console.log(thing);
