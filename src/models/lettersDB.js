const db = require("better-sqlite3")("main.db");

const addLetter = (letter) => {
  db.prepare(
    "INSERT INTO letters (id, message, views, ownerId) VALUES (?, ?, ?, ?)"
  ).run(letter.id, letter.message, letter.views, letter.ownerId);
};

const printAllTables = () => {
  const tables = db
    .prepare("SELECT name FROM sqlite_master WHERE type='table'")
    .all();

  tables.forEach((table) => {
    console.log(`Table: ${table.name}`);
    const rows = db.prepare(`SELECT * FROM ${table.name}`).all();
    console.table(rows);
  });
};

export { addLetter, printAllTables };
