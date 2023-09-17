const mongoose = require("mongoose");
const request = require("supertest");
const { app, seedDB } = require("../server");
const testData = require("../data/testData");
const ENV = process.env.NODE_ENV;
const pathToCorrectFile = `${__dirname}/../.env.${ENV}`;
require("dotenv").config({ path: pathToCorrectFile });

/* Connecting to the database before each test. */
beforeEach(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  await seedDB(testData);
});

/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});

describe("GET DRIVERS", () => {
  it("returns a list of drivers", () => {
    return request(app)
      .get("/api/drivers")
      .expect(200)
      .then((response) => {
        const { allDrivers } = response.body;
        console.log(allDrivers);
        expect(allDrivers.length).toBe(4);
        allDrivers.forEach((driver) => {
          expect(driver).toHaveProperty("name");
          expect(driver).toHaveProperty("truckName");
          expect(driver).toHaveProperty("isActive");
        });
      });
  });
});
