import asyncHandler from "express-async-handler";

const RegisterUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400).send({ message: "Missing credentials" });
  }
  res.status(200).send("ight");
  res.send("register route");
});

const LoginUser = asyncHandler(async (req, res) => {
  res.send("register route");
});

export { RegisterUser, LoginUser };
