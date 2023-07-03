const express = require("express");
const cookie = require("cookie-parser");
const app = express();
let cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

const router = require("./routes");

app.use(cookie());
app.use(express.json());

require("./database");

app.use(router);

app.use("*", (req, res) => {
  res.status(404).end();
});

app.listen(8000);
