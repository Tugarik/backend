import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Users from "../models/Users.js";

export const register = async (req, res) => {
  console.log("Register request");
  const data = await req.body;
  if (!(data.email && data.password)) {
    res.status(400).json({
      success: false,
      message: "Input your full credentials for registering",
    });
    return;
  }
  if (data) {
    const oldUser = await Users.findOne({ email: data.email });
    if (oldUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists, please login",
      });
    }
    let hashedPassword = await bcrypt.hash(data.password, 2);
    data.password = hashedPassword;
    Users.create(data)
      .then((data) => {
        res.status(201).json({
          message: "User registered!",
        });
      })
      .catch((error) => {
        res.status(500).send({
          success: false,
          error: error,
        });
      });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      res.status(400).json({
        success: false,
        message: "Input your full credentials",
        updated: 1,
        email: email,
        password: password,
      });
      return;
    }
    const user = await Users.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id, email },
        "RandomTextKeyForPrivateToken",
        {
          expiresIn: "2h",
        }
      );
      res.status(200).json({
        success: true,
        message: "Login success!",
        data: user,
        token: token,
      });
      return;
    }
    res.status(400).json({
      success: false,
      message: "Wrong credentials, check your input!",
    });
    return;
  } catch (err) {
    console.log(err);
  }
};
