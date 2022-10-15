
//sImport Role Model
import db from "../config/db.config.js";
import user from "../models/User.js";
import bcrypt from "bcrypt"
// const saltRounds = 10

export const userRegister = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    console.log(salt)
    console.log(hashedPassword)
    const user = { userName: req.body.userName, password: hashedPassword }
    res.status(200).send(user)
  } catch (err) {
    console.log(err)
    res.status(500).send()
  }

};












