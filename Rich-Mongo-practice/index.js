const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://SnackTrack:TestTest@testdatabase.pkbcgcp.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("sample_restaurants");
    const collection = db.collection("restaurants");

    // Find the first document in the collection
    const first = await collection
      .aggregate([
        {
          $limit: 1,
        },
      ])
      .toArray();
    console.log(first);
  } finally {
    // Close the database connection when finished or an error occurs
    await client.close();
  }
}
run().catch("hi", console.error);
