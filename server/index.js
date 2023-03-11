const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");

mongoose.connect();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/", async (req, res) => {
  const newUser = new UserModel({
    name: req.body.name,
    age: req.body.age,
    username: req.body.username,
  });

  try {
    const response = await newUser.save();
    console.log(response);
    res.json(response);
  } catch (error) {
    res.json({ error: error });
  }
});

app.get("/getUsers", async (req, res) => {
  const data = await UserModel.find();
  res.json(data);
});

app.listen(3001, () => {
  console.log("SERVER RUNS");
});
