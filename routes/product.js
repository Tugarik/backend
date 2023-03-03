import express from "express";
import {
  addProduct,
  alterProduct,
  delProduct,
  getProducts,
} from "../services/product-service.js";

const prodRouter = express.Router();

prodRouter.get("/products", async (req, res) => {
  console.log("Product avah huselt orj irlee");
  const { query } = req;
  const result = await getProducts(query.limit || 100);
  res.send(result);
});

prodRouter.post("/product", async (req, res) => {
  console.log("Product POST huselt orj irlee");
  // console.log(req.body);
  const properties = Object.keys(req.body);
  const values = Object.values(req.body);

  addProduct(properties, values);

  const { query } = req;
  let products = await getProducts(query.limit || 100);
  res.send(products);
});

prodRouter.delete("/product", async (req, res) => {
  console.log("Product DELETE huselt orj irlee");

  const { query } = req;
  const id = query.id;
  delProduct(id);
  // alterProduct();
  let products = await getProducts(query.limit || 100);
  res.send(products);
});

export default prodRouter;
