import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import productsRouter from "./routes/product.js";
import usersRouter from "./routes/user.js";
import empRouter from "./routes/employee.js";

import fs from 'fs';

const app = express();
const PORT = 5050;

app.use(cors());
app.use(bodyParser.json());

app.use(productsRouter);
app.use(usersRouter);
app.use(empRouter);

app.get("/", (req, res) => {
  res.send("HELLO from Backend");
});

app.get("/info", (req, res)=>{
  fs.readFile("./sql/gpt_products.json", (err, data) => {
    if (err) {
      res.status(500).send({ message: err });
    } else {
      let savedData = JSON.parse(data);
      let arr = [];
      savedData.forEach((el) => {
        arr = [...arr, [
          el.name, 
          el.description,
          el.price,
          el.image_url,
          el.category,
          el.brand,
          el.rating,
          el.reviews,
          el.stock,
          el.sale,
          el.createdBy,
          el.createdDate
        ]];
        console.log(arr);    
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
