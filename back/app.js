const express = require("express");
const cookie = require("cookie-parser");
const router = require("./routes");
const app = express();

app.use(cookie());
app.use(express.json());

require("./database");

app.use(router);

app.use("*", (req, res) => {
  res.status(404).end();
});

app.listen(8000);
