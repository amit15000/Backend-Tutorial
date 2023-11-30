const express = require("express");

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
