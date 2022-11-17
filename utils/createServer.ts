import "reflect-metadata";
import express, { Application } from "express";
import { useContainer, useExpressServer } from "routing-controllers";
import Container from "typedi";
import { ProductController } from "../controllers/ProductController";

export const createServer = (): Application => {
  useContainer(Container);

  const app: Application = express();

  return useExpressServer(app, {
    routePrefix: "/api",
    controllers: [ProductController],
    classTransformer: false,
    defaultErrorHandler: false,
  });
};
