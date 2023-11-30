const express = require("express");
const app = express();
app.listen(3000, () => {
  console.log("Server of Amit started at 3000");
});

app.get("/", (request, response) => {
  response.send("Hello jee");
});
