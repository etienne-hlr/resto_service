const router = require("express").Router();
const apiSignup = require("./signup");
const apiSignin = require("./signin");

router.use("/signup", apiSignup);
router.use("/signin", apiSignin);

module.exports = router;
