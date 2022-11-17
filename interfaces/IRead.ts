import { Response } from "express";

export interface IRead {
  findAll(): any;

  findById(id: string, res: Response): any;
}
