import asyncHandler from "express-async-handler";
import bcryptjs from "bcryptjs";
import { User } from "../models/userModel.js";
import jsonwebtoken from "jsonwebtoken";

const RegisterUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400).send({ message: "Missing credentials" });
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const salt = bcryptjs.genSaltSync(10);
  const hashedPw = await bcryptjs.hash(password, salt);
  console.log(hashedPw);
  const user = await User.create({
    name,
    email,
    password: hashedPw,
  });
  if (user) {
    res.status(201).json({
      message: "User created",
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Failed to create user");
  }
});

const LoginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await bcryptjs.compare(password, user.password))) {
    res.status(201).json({
      message: "User created",
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid credentials");
  }
});

const GetMe = asyncHandler(async (req, res) => {
  const { id: _id, name, email } = req.user;
  res.status(200).send({
    id,
    name,
    email,
  });
});

const generateToken = (id) => {
  return jsonwebtoken.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

export { RegisterUser, LoginUser, GetMe };
