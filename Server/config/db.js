import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const ConnectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log(connect.connection.host);
  } catch (error) {
    console.log(error.message);
  }
};

export { ConnectDB };
