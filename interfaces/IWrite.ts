import { Response } from "express";
import { IProduct } from "./IProduct";

export interface IWrite {
  insert(product: IProduct, res: Response): any;
}
