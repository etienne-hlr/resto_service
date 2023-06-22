const UserModel = require("../../database/models/user_model");

const router = require("express").Router();

router.post("/", async (req, res) => {
  const body = req.body;
  const newUser = new UserModel(body);
  try {
    const user = await newUser.save();
    res.json(user);
  } catch (error) {
    res.status(400).json("error user creation");
  }
});

module.exports = router;
