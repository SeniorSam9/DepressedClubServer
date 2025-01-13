const express = require("express");
const router = express.Router();

router.post("/add-letter", (req, res) => {
  console.log(req.body);
});

module.exports = router;
