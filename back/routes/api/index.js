const router = require("express").Router();
const apiUsers = require("./users.js");

router.use("/users", apiUsers);

module.exports = router;
