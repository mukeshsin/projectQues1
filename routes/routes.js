// Import express
import express from "express";
// Import User Controller
import {
  userRegister
} from "../controllers/User.js";


// Init express router
const router = express.Router();


// Route for User register
router.post('/user/register', userRegister);

// export router
export default router;
