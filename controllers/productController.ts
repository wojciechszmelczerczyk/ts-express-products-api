import { Request, Response } from "express";

const products = [
  { id: 1, name: "ball", price: 5 },
  { id: 2, name: "shirt", price: 10 },
  { id: 3, name: "shoes", price: 25 },
];

export const getProducts = (req: Request, res: Response) => res.json(products);

export const getProduct = (req: Request, res: Response) =>
  res.json(
    products.filter((product) => product.id === parseInt(req.params.id))
  );

export const createProduct = (req: Request, res: Response) =>
  res.json(req.body);

export const updateProduct = (req: Request, res: Response) =>
  res.json(req.body);

export const deleteProduct = (req: Request, res: Response) =>
  res.status(204).end();
