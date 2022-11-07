import "reflect-metadata";
import express from "express";
import { useContainer, useExpressServer } from "routing-controllers";
import Container from "typedi";
import { ProductController } from "../controllers/productController";

export const createServer = () => {
  useContainer(Container);

  const app = express();

  app.use(express.json());

  return useExpressServer(app, {
    routePrefix: "/api",
    controllers: [ProductController],
    defaultErrorHandler: false,
  });
};
