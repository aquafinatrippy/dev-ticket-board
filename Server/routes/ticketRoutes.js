import express from "express";
import {
  createTicket,
  deleteTicket,
  getTicket,
  getTickets,
  updateStatus,
  updateTicket,
} from "../controllers/ticketController.js";
import { authCheck } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(authCheck, getTickets).post(authCheck, createTicket);
router
  .route("/:id")
  .get(authCheck, getTicket)
  .put(authCheck, updateTicket)
  .delete(authCheck, deleteTicket);

router.route("/status/:id").put(authCheck, updateStatus);

export default router;
