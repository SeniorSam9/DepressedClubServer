const db = require("better-sqlite3")("main.db");

const addUser = (user) => {
  db.prepare("INSERT INTO users (id, name) VALUES (?, ?)").run(
    user.id,
    user.name
  );
};

module.exports = { addUser };
