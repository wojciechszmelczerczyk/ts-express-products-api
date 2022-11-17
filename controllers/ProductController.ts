import { Request, Response } from "express";
import {
  JsonController,
  Get,
  Res,
  Req,
  Post,
  Body,
  UseAfter,
  Param,
  UseBefore,
  Put,
  Delete,
} from "routing-controllers";
import { Service } from "typedi";
import { IProduct } from "../interfaces/IProduct";
import ProductService from "../services/ProductService";
import { ErrorMiddleware } from "../middlewares/ErrorMiddleware";
import { ValidateIdMiddleware } from "../middlewares/ValidateIdMiddleware";

@JsonController("/products")
@Service()
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  getProducts(@Req() _req: Request, @Res() _res: Response) {
    return this.productService.getProducts();
  }

  @Get("/:id")
  @UseBefore(ValidateIdMiddleware)
  getProductById(
    @Req() _req: Request,
    @Res() res: Response,
    @Param("id") id: string
  ) {
    return this.productService.getProductById(id, res);
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

  @Put("/:id?")
  @UseBefore(ValidateIdMiddleware)
  @UseAfter(ErrorMiddleware)
  updateProduct(
    @Req() _req: Request,
    @Res() res: Response,
    @Body() product: IProduct,
    @Param("id") id: string
  ) {
    return this.productService.updateProduct(product, id, res);
  }

  @Delete("/:id?")
  @UseBefore(ValidateIdMiddleware)
  deleteProduct(
    @Req() _req: Request,
    @Res() res: Response,
    @Param("id") id: string
  ) {
    return this.productService.deleteProduct(id, res);
  }
}
