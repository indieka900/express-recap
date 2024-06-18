const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
    },
    quantity: {
      type: Number,
      required: [true, "Please enter the quantity of the product"],
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "Please enter the price of the product"],
      default: 0,
    },
    imageUrl: {
      type: String,
      required: false,
      default: "default.png"
    },
  },
  //two more fields for createdAt and updatedAt
  {
    timestamps: true,
  }
);

const Product= mongoose.model("Product", ProductSchema);

module.exports = Product;
