import { Service } from "typedi";
import Product from "../models/Product";
import { IProduct, IWrite, IRead } from "../interfaces";
import { Response } from "express";

@Service()
export default class ProductRepository implements IRead, IWrite {
  async findAll(): Promise<any> {
    return await Product.find();
  }

  async findById(id: string, res: Response): Promise<any> {
    const product = await Product.findById(id);
    // if no product found with provided id, return error message
    if (!product)
      return res
        .status(400)
        .json({ id: "Product with provided id doesn't exist" });

    // otherwise return product
    return product;
  }

  async insert(product: IProduct, res: Response): Promise<any> {
    return res.json(await Product.create(product));
  }

  async update(product: IProduct, id: string, res: Response): Promise<any> {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
      runValidators: true,
    });

    if (!updatedProduct)
      return res
        .status(400)
        .json({ id: "Product with provided id doesn't exist" });

    return res.json(updatedProduct);
  }

  async delete(id: string, res: Response): Promise<any> {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct)
      return res
        .status(400)
        .json({ id: "Product with provided id doesn't exist" });
    return res.status(204).end();
  }
}
