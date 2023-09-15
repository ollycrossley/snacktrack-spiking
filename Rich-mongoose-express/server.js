const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Driver = require("./DBmodels/Driver");

app.use(express.json());

app.get("/", async (req, res) => {
  return res.json({ message: "Hello, World ✌️" });
});

app.get("/api/drivers", async (req, res) => {
  const allDrivers = await Driver.find();
  return res.status(200).send({ allDrivers });
});

app.get("/api/drivers/:id", async (req, res) => {
  const { id } = req.params;
  const driver = await Driver.findById(id);
  return res.status(200).send(driver);
});

app.post("/api/drivers", async (req, res) => {
  const newDriver = new Driver({ ...req.body });
  console.log(newDriver);
  const insertedDriver = await newDriver.save();
  return res.status(201).send(insertedDriver);
});

app.delete("/api/drivers/:id", async (req, res) => {
  const { id } = req.params;
  const deletedDriver = await Driver.findByIdAndDelete(id);
  return res.status(200).send(deletedDriver);
});

const drivers = [
  { name: "Jim", truckName: "Good Morning" },
  { name: "Christian", truckName: "Nice" },
  { name: "Stephen", truckName: "Bananas" },
];

const seedDB = async (data) => {
  await Driver.deleteMany({});
  await Driver.insertMany(data);
};

module.exports = { seedDB, app, drivers };
