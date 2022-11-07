import { Service } from "typedi";
import Product from "../models/Product";

@Service()
export default class ProductRepository {
  async findAll() {
    return await Product.find();
  }
}
