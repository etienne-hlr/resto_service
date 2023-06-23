const UserModel = require("../../database/models/user_model");
const bcrypt = require("bcrypt");
const router = require("express").Router();

router.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new UserModel({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    res.json(user);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
