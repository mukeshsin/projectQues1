//sImport Role Model
import db from "../config/db.config.js";
import Role from "../models/Role.js";

// Get all Role
export const getRoles = async (req, res) => {

  Role.findAll({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "500 errors to the user"
      });
    });
};
// Get role by id
export const getRoleById = async (req, res) => {
  const id = req.params.id;
  Role.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(400).send({
          message: `Cannot find Role with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: " 500 errors to the user with id=" + id
      });
    });
};
export const createRole = async (req, res) => {
  // Validate request
  if (!req.body.name) 
  if (!req.body.description){
    res.status(400).send({
      message: "500 error to the user"
    });
    return;
  }

  // Create a Role
  const roles = {
    name: req.body.name,
    description: req.body.description
  };

  // Save role
  Role.create(roles)
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





//  Update role by id
export const updateRole = async (req, res) => {

  const id = req.params.id;
  Role.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Role was updated successfully."
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "500 error to the user"
      });
    });
};

//  Delete role by id
export const deleteRole = async (req, res) => {
  const id = req.params.id;
  Role.destroy({
    where: { id: id },

  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Role was deleted successfully."
        });
     }
    })
    .catch(err => {
      res.status(500).send({
        message: "500 error to the user"
      });
    });
};