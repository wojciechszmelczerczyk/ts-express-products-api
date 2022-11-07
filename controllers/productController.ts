import { Request, Response } from "express";
import { JsonController, Get, Res, Req } from "routing-controllers";
import { Service } from "typedi";
import { ProductService } from "../services/productService";

@JsonController("/products")
@Service()
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  getProducts(@Req() _req: Request, @Res() _res: Response) {
    return this.productService.getProducts();
  }
}
