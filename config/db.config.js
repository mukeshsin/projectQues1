
// import sequelize
import { Sequelize } from "sequelize";

// create connection
const db = new Sequelize('sequelize_db', 'root', '', {
    host: 'localhost',
    password:'singh@2023',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
});

// export connection
export default db;