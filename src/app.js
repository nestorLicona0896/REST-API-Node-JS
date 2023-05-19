import express from "express";
import morgan from "morgan";

import usersRoutes from "./routes/users.routes"

const app = express();

//settings:
app.set("port", 4000);

//middelware:
app.use(morgan("dev")); //morgan dev mode allows to see what kind of verb is proccesing the server; request?(GET, POST, PUT, DELETE)
const bodyParser = require('body-parser');
// ...
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

//routes:
app.use("/api/users", usersRoutes);

export default app;