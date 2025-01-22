const express = require("express");
const router = express.Router();
const { addLetter } = require("../models/letters/lettersModel");

router.post("/add-letter", addLetter);

module.exports = router;
