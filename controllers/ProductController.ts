import { Request, Response } from "express";
import {
  JsonController,
  Get,
  Res,
  Req,
  Post,
  Body,
  UseAfter,
} from "routing-controllers";
import { Service } from "typedi";
import { IProduct } from "../interfaces/IProduct";
import ProductService from "../services/ProductService";
import { ErrorMiddleware } from "../middlewares/ErrorMiddleware";

@JsonController("/products")
@Service()
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  getProducts(@Req() _req: Request, @Res() _res: Response) {
    return this.productService.getProducts();
  }

  @Post()
  @UseAfter(ErrorMiddleware)
  createProduct(
    @Req() _req: Request,
    @Res() res: Response,
    @Body() product: IProduct
  ) {
    return this.productService.createProduct(product, res);
  }
}
