
// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../config/db.config.js";
// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const user = db.define('users', {
  // Define attributes
  id: {
    type: DataTypes.INTEGER,
    allownull: false,
    autoIncrement: true,
    primaryKey: true

  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.VIRTUAL,
    allowNull: false,
  },
  confirmPassword: {
    type: DataTypes.STRING,
    allowNull: false
  },
  emailId: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  roleId: {
    type: DataTypes.INTEGER,
    allownull: false,
    references: {
      model: "roles",
      key: "id"
    }
  }
}, {
  //  freeze Table Name
  freezetableName: "true",
  tableName: "users"
});

// Export model user
export default user;

