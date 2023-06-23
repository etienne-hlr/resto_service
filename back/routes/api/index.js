const router = require("express").Router();
const apiSignup = require("./signup");

router.use("/signup", apiSignup);

module.exports = router;
