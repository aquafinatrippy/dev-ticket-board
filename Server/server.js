import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
import { ConnectDB } from "./config/db.js";

ConnectDB();
const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", userRoutes);

app.use(errorHandler);

app.listen(process.env.PORT || 5000, () => {
  console.log(process.env.PORT);
});
