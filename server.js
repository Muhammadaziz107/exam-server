const express = require("express");
const app = express();
const cors = require("cors");
const { PORT } = require("./src/config");
const router = require("./src/modules/routes");

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
