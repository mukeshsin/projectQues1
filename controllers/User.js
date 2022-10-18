
//Import user Model
import user from "../models/User.js";
// import bcrypt from "bcrypt"


// export const userRegister = async (req, res) => {
//   try {
//     const salt = await bcrypt.genSalt()
//     const hashedPassword = await bcrypt.hash(req.body.password, salt)
//     console.log(salt)
//     console.log(hashedPassword)
//     const users = { userName: req.body.userName, 
// password: hashedPassword,
//   firstName: req.body.firstName,
//     lastName: req.body.firstName,
//       confirmPassword: req.body.confirmPassword,
//         emailId: req.body.emailId,
//           rolesId: req.body.rolesId
// }
//     res.status(200).send(users)
//   } catch (err) {
//     console.log(err)
//     res.status(500).send()
//   }

// };


export const userRegister = async (req, res) => {

  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "500 error to the user"
    });
    return;
  }

  // Create a Role
  const users = {
    userName: req.body.userName,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.firstName,
    confirmPassword: req.body.confirmPassword,
    emailId: req.body.emailId,
    rolesId: req.body.rolesId

  };

  // Save role
  user.create(users)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "500 error to the user to create new role."
      });
    });
  };

//   // Validate request
//   const { userName, password, firstName, lastName, confirmPassword, emailId, roleId } = req.body
//   if (!userName || !password || !firstName || !lastName || !confirmPassword || !emailId || !roleId) {
//     res.status(400).json({ error: "invalid detail" })

//   }
//   try {
//     const userExist = await user.findOne({ userName: userName });
//     if (userExist) {
//       res.status(500).json({ error: "userName already exist" });

//     }
//   }catch(err){
//     console.log(err);
//   }
// }





//user login

export const userLogin = async (req, res) => {

  const user = await user.list({ where: { userName: req.body.userName } })
  if (user) {
    const password_valid = await bcrypt.compare(req.body.password, user.password);
    if (password_valid) {
      token = jwt.sign({ "id": "user.id", "userName": "userName", "password": "password" },
        res.status(200).json({ token: token }));
    } else {
      res.status(400).send("password is incorrect")
    }
  } else {
    res.status(500).send("database is not exist")
  }
}