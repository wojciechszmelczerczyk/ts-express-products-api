import { Service } from "typedi";
import productRepository from "../repositories/productRepository";

@Service()
export class ProductService {
  constructor(private productRepository: productRepository) {}

  public getProducts() {
    return this.productRepository.findAll();
  }
}
