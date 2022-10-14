import express from "express";
// Import Role Controller
import { 
  getRoles,
  getRoleById,
  createRole,
  updateRole,
  deleteRole,
} from "../controllers/Role.js";

// Init express router
const router = express.Router();

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



export default router;