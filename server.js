const express = require("express");
const mongoose = require("mongoose");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("Server of Amit started at 3000");
});

app.get("/", (request, response) => {
  response.send("Hello jee");
});
app.post("/api/cars", (req, res) => {
  const { name, brand } = req.body;
  res.send("Car's post request completed.");
});
mongoose
  .connect("mongodb://localhost:27017/myDatabase")
  .then(() => {
    console.log("Server Connection with Database : Successful");
  })
  .catch((error) => {
    console.log("Server Connection With Database :Failed");
  });
