// libs
const express = require("express");
const server = express();
const port = 3000;
const cors = require("cors");

const letterRoute = require("./src/routes/lettersRoute");

// configs
server.use(cors());
server.use(express.json());

//middleware
server.use("/letter", letterRoute);

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
