import mongoose from "mongoose";

const MongoDB_API =
  "mongodb+srv://tugAdmin:555555@cluster0.z8ursva.mongodb.net/sample_mflix?retryWrites=true&w=majority";

const db = mongoose
  .connect(MongoDB_API)
  .then(() => {
    console.log("Database connection success!");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

export default mongoose.connection;
