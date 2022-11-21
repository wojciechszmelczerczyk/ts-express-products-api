import { ExpressMiddlewareInterface } from "routing-controllers";
import { Service } from "typedi";
import { Request, Response } from "express";

@Service()
export class ValidateBodyMiddleware implements ExpressMiddlewareInterface {
  use(req: Request, res: Response, next: (err?: any) => any) {
    const { name, price } = req.body;

    const maxLength = 100;
    const minLength = 4;

    // if no data provided
    if (!name)
      return res
        .status(400)
        .json({ name: "Please provide the name of product" });

    // if no data provided
    if (!price)
      return res
        .status(400)
        .json({ name: "Please provide the price of product" });

    if (name.length < minLength)
      return res.status(400).json({
        name: "Product name is too short. Minimum length is 4 characters",
      });

    if (name.length > maxLength)
      return res.status(400).json({
        name: "Product name is too long. Maximum length is 100 characters",
      });

    if (isNaN(price))
      return res
        .status(400)
        .json({ price: "Provided price has to be a numeric value" });

    // otherwise pass handler to controller
    next();
  }
}
