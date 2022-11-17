import { ExpressErrorMiddlewareInterface } from "routing-controllers";
import { Service } from "typedi";
import { Request, Response } from "express";

@Service()
export class ErrorMiddleware implements ExpressErrorMiddlewareInterface {
  error(err: any, req: Request, res: Response, next: (err: any) => any) {
    // intercepts errors and format error response object
    if (err.name === "ValidationError") {
      let errors = {};

      Object.keys(err.errors).forEach((key) => {
        errors[key] = err.errors[key].message;
      });
      res.status(400).json(errors);
    }
  }
}
