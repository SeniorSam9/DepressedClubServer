const db = require("./lettersDB");
const sanitizeHtml = require("sanitize-html");

const addLetter = async (req, res) => {
  const sanitizedMessage = sanitizeHtml(req);
  console.log("letter from model", req.body);

  const letter = {};
  //db.addLetterDB()
};

module.exports = { addLetter };
