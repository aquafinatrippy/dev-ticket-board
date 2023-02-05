import express from "express";
import {
  RegisterUser,
  LoginUser,
  GetMe,
} from "../controllers/userController.js";
import { authCheck } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", RegisterUser);

router.post("/login", LoginUser);

router.get("/me", authCheck, GetMe);

export default router;
