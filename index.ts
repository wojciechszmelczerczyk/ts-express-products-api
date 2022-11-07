import express, { Application } from "express";
import products from "./routes/products";

const app: Application = express();

app.use(express.json());

app.use("/api/products", products);

const port: number = 3000 || process.env.PORT;

app.listen(port, () => console.log("Listening at port 3000"));
