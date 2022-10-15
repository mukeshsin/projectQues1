// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../config/db.config.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Role = db.define('roles', {
  // Define attributes
  id: {
    type: DataTypes.INTEGER,
    allownull: false,
    autoIncrement: true,
    primaryKey: true

  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validation: {
      message: "name has already used"
    }
  },
  description: {
    type: DataTypes.STRING
  }
}, {
  //  freeze Table Name
  freezetableName: "true",
  tableName: "roles"
});

// Export model Role
export default Role;

