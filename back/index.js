const express = require("express");
const cookie = require("cookie-parser");
const app = express();

const router = require("./routes");

app.use(cookie());
app.use(express.json());

app.use(router);

app.use("*", (req, res) => {
  res.status(404).end();
});

app.listen(8000);
