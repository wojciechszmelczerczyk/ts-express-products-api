import { Schema, model } from "mongoose";
import { IProduct } from "../interfaces/IProduct";
import validator from "validator";

const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: [true, "Please provide the product name"],
      minlength: [
        4,
        "Product name is too short. Minimum length is 4 characters",
      ],
      maxlength: [
        100,
        "Product name is too long. Maximum length is 100 characters",
      ],
    },
    price: {
      type: String,
      required: [true, "Please provide the product price"],
      validate: [
        validator.isNumeric,
        "Provided price has to be a numeric value",
      ],
    },
  },
  { timestamps: true }
);

const Product = model<IProduct>("product", productSchema);

export default Product;
