const router = require("express").Router();
const apiRouter = require("./api");

router.use("/api", apiRouter);
router.get("/test", (req, res) => {
  res.json("ok !");
});

module.exports = router;
