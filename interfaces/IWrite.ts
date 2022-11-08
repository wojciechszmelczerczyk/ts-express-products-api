import { IProduct } from "./IProduct";

export interface IWrite {
  insert(product: IProduct, res: any): any;
}
