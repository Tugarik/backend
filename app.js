import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import productsRouter from "./routes/product.js";
import usersRouter from "./routes/user.js";
import empRouter from "./routes/employee.js";

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

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
