//Import user Model
import db from "../config/db.config.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";

export const userRegister = async (req, res) => {
  // Validate request
  const userName = req.body.userName;
  const password = req.body.password;
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  console.log(hashedPassword);
  console.log(salt);
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const confirmPassword = req.body.confirmPassword;
  const emailId = req.body.emailId;
  const roleId = req.body.roleId;
  if (
    !userName ||
    !password ||
    !firstName ||
    !lastName ||
    !confirmPassword ||
    !emailId ||
    !roleId
  ) {
    res.status(400).json({ error: "invalid detail" });
  }
  try {
    const userExist = await User.findOne({ where: { emailId: emailId } });
    console.log(userExist);
    if (userExist) {
      res.status(500).json({ error: "emailId already exist" });
    } else {
      User.create({
        userName: req.body.userName,
        password: req.body.password,
        password: hashedPassword,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        confirmPassword: req.body.confirmPassword,
        emailId: req.body.emailId,
        roleId: req.body.roleId,
      })
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || "500 error to the user to create new role.",
          });
        });
    }
  } catch (err) {
    console.log(err);
  }
};

 //user login

export const userLogin = async (req, res) => {
  try {
    const { userName, password } = req.body;
    if (!userName || !password) {
      res.status(400).json({ error: "Please fill the details" });
    }
    const userLogin = User.findOne({ where: { userName: userName } });
    console.log(userLogin);
    if (!userLogin) {
      res.status(400).json({ error: "user error" });
    } else {
      res.json({ message: "user login successfully" });
    }
  } catch (err) {
    console.log(err);
  }
};
