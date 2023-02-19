import express from "express";
import {
  createTicket,
  deleteTicket,
  getTicket,
  getTickets,
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

export default router;
