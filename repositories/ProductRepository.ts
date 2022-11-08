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

  async findById(id: string, res: any): Promise<any> {
    const product = await Product.findById(id);
    // if no product found with provided id, return error message
    if (!product)
      res.status(400).json({ id: "Product with provided id doesn't exist" });

    // otherwise return product
    return product;
  }

  async insert(product: IProduct, res: any): Promise<any> {
    return res.json(await Product.create(product));
  }
}
