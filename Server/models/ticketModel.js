
import mongoose from "mongoose";

const ticketSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    title: {
      type: String,
      required: [true, "Title missing"],
    },
    description: {
      type: String,
      required: [true, "Empty description"],
    },
    status: {
      type: Boolean,
      required: true,
      enum: ['New', 'On progress', 'Done', 'On hold'],
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.model("Ticket", ticketSchema);

export { Ticket };
