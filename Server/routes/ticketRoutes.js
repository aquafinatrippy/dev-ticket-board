import express from "express";
import { createTicket, getTickets } from "../controllers/ticketController.js";
import { authCheck } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(authCheck, getTickets).post(authCheck, createTicket);

export default router;
