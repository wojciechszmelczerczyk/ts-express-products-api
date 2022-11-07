import { Schema, model } from "mongoose";

interface IProduct {
  name: String;
  price: number;
}

const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: [true, "Please provide the note title"],
      minlength: [4, "Name is too short. Minimum length is 4 characters"],
      maxlength: [100, "Name is too long. Maximum length is 100 characters"],
    },
    price: {
      type: Number,
      required: [true, "Please provide product price"],
    },
  },
  { timestamps: true }
);

const Product = model<IProduct>("product", productSchema);

export default Product;
