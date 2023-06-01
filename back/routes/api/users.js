const router = require("express").Router();
const UserModel = require("../../database/models/user_model");

router.post("/", async (req, res) => {
  const body = req.body;
  const newUser = new UserModel(body);
  newUser.save((err, user) => {
    try {
      res.json(user);
    } catch (error) {
      res.json(error);
    }
  });
});

module.exports = router;
