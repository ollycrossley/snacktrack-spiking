const mongoose = require("mongoose");
const { seedDB, drivers, app } = require("./server");
const ENV = "development";
const pathToCorrectFile = `${__dirname}/.env.${ENV}`;
require("dotenv").config({ path: pathToCorrectFile });

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://SnackTrack:TestTest@testdatabase.pkbcgcp.mongodb.net/?retryWrites=true&w=majority"
    );
    await seedDB(drivers);
    app.listen(3000, () => console.log("Server started on port 3000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
