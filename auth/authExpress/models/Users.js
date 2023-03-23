import { model, Schema } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, "Please provide an Email!"],
        unique: [true, "Email already exists!"],
    },
    password: {
        type: String,
        required: [true, "Please provide a password!"],
        unique: false,
    }
})

export default model("users", UserSchema);