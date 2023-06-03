const router = require("express").Router();
const apiRouter = require("./api");

router.use("/api", apiRouter);

router.get("/test", (req, res) => {
  if (res.status === 200) {
    res.json("ok !");
  }
});

module.exports = router;
