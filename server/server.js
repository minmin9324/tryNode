const express = require("express");
const app = express();

const test = require("./Router/test");
const cors = require("cors");
app.use(cors());
app.use("/api", test);

app.listen(8080, function () {
  console.log("listening on 8080");
});

// app.get("/", function (request, response) {
//   response.sendFile(__dirname + "/public/index.html");
// });
