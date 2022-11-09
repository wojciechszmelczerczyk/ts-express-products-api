import mongoose from "mongoose";
import { ExpressMiddlewareInterface } from "routing-controllers";
import { Service } from "typedi";

@Service()
export class VerifyParamMiddleware implements ExpressMiddlewareInterface {
  use(req: any, res: any, next: (err?: any) => any) {
    const id = req.params.id;

    // if put or delete request, check if id was provided
    // if not return error message
    if ((!id && req.method === "PUT") || (!id && req.method === "DELETE"))
      return res.status(400).json({ id: "No id provided" });

    // check if provided url param is consistent with mongoose object id
    // if not return error message
    if (!mongoose.isValidObjectId(id))
      return res.status(400).json({ id: "Provided id is incorrect" });

    // otherwise pass handler to controller
    next();
  }
}
