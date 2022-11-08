import { Service } from "typedi";
import { IProduct } from "../interfaces/IProduct";
import ProductRepository from "../repositories/ProductRepository";

@Service()
export default class ProductService {
  constructor(private productRepository: ProductRepository) {}

  public async getProducts() {
    return await this.productRepository.findAll();
  }

  public async getProductById(id: string, res: any) {
    return await this.productRepository.findById(id, res);
  }

  public async createProduct(product: IProduct, res: any) {
    return await this.productRepository.insert(product, res);
  }

  public async updateProduct(product, id, res) {
    return await this.productRepository.update(product, id, res);
  }
}
