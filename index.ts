import { Application } from "express";
import { createServer } from "./utils/createServer";
import { dbConnection } from "./db/connection";

dbConnection();

const app: Application = createServer();

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));
