import mongoose from "mongoose";
const MONGO_DB_URL =
  "mongodb+srv://tugAdmin:555555@cluster0.z8ursva.mongodb.net/test";
mongoose
  .connect(MONGO_DB_URL)
  .then(() => console.log("DB connection success"))
  .catch((err) => console.error(err));

export default mongoose.connection;
