import express from "express";

const productsRouter = express.Router();

let products = [
  {
    id: 1,
    name: "Product 1",
  },
];

productsRouter.get("/products", (req, res) => {
  console.log("Product avah huselt orj irlee");
  res.send(products);
});

productsRouter.post("/product", (req, res) => {
  console.log("Product POST huselt orj irlee");
  console.log(req.body);
  products.push(req.body);
  res.send(products);
});

productsRouter.delete("/product", (req, res) => {
  console.log("Product DELETE huselt orj irlee");
  console.log(req.body);
  const id = req.body.id;
  products = products.filter((product) => product.id !== id);
  res.send(products);
});

export default productsRouter;
