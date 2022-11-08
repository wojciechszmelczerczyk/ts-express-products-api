import { Service } from "typedi";
import Product from "../models/Product";
import { IRead } from "../interfaces/IRead";
import { IWrite } from "../interfaces/IWrite";
import { IProduct } from "../interfaces/IProduct";

@Service()
export default class ProductRepository implements IRead, IWrite {
  async findAll(): Promise<any> {
    return await Product.find();
  }

  async insert(product: IProduct, res: any): Promise<any> {
    return res.json(await Product.create(product));
  }
}
