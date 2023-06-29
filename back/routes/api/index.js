const router = require("express").Router();
const apiSignup = require("./signup");
const apiSignin = require("./signin");

router.use("/signin", apiSignin);
router.use("/signup", apiSignup);

module.exports = router;
