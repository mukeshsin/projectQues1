
// Import express
import express from "express";
// Import cors
import cors from "cors";
// Import connection
import db from "./config/db.config.js";

// Import router
import Router from "./routes/routes.js";
//await db.sync({ force: true });
// Init express
const app = express();
// use express json
app.use(express.json());
// use cors
app.use(cors());




// Testing database connection 
try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('500 errors:', error);
}

// use router
app.use(Router);

// listen on port
app.listen(7500, () => console.log('Server running at http://localhost:7500'));