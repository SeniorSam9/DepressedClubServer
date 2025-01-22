// libs
const express = require("express");
const server = express();
const port = 3000;
const cors = require("cors");

const letterRoute = require("./src/routes/lettersRoute");
const userRoute = require("./src/routes/usersRoute");
// configs
server.use(cors());
server.use(express.json());

//middleware
server.use("/letter", letterRoute);
server.use("/user", userRoute);

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
