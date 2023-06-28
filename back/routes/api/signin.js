const UserModel = require("../../database/models/user_model");
const bcrypt = require("bcrypt");
const router = require("express").Router();
const jsonwebtoken = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email }).exec();
    if (user) {
      if (bcrypt.compareSync(password, user.password)) {
        const token = jsonwebtoken.sign({}, key, {
          subject: user._id.toString(),
          expiresIn: "10m",
        });
        res.cookie("token", token);
        res.json(user);
      }
    }
  } catch (error) {
    res.status(400).json("mauvaise email ou mot de passe");
  }
});

module.exports = router;
