const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hiihihi");
});

module.exports = router;
