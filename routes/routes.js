// Import express
import express from "express";

//Import Role controller
import { 
  getRoles,
  getRoleById,
  createRole,
  updateRole,
  deleteRole,
} from "../controllers/Role.js";

// Import User Controller
import {
  userRegister,
  userLogin
} from "../controllers/User.js";





// Init express router
const router = express.Router();

//Routes for Role 


// Route get all roles
router.get('/role/list', getRoles);
// Route get product by id
router.get('/role/:id', getRoleById);
// Route create a new product
router.post('/role/add', createRole);
// Route update role by id
router.put('/role/edit/:id', updateRole);
// Route delete role by id
router.delete('/role/delete/:id', deleteRole);




// Route for User register
router.post('/user/register', userRegister);



//Route for User login
router.post('/user/login', userLogin);

// export router
export default router;
