import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Empty name"],
    },
    email: {
      type: String,
      required: [true, "Empty email"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Empty password"],
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export { User };
