import asyncHandler from "express-async-handler";
import { Ticket } from "../models/ticketModel.js";
import { User } from "../models/userModel.js";

const getTickets = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not identified");
  }
  const tickets = await Ticket.find();
  res.status(200).json(tickets);
});

const getTicket = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not identified");
  }
  const ticket = await Ticket.findById(req.params.id);
  if (!ticket) {
    res.status(404);
    throw new Error("Ticket not found");
  }
  res.status(200).json(ticket);
});

const deleteTicket = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not identified");
  }
  const ticket = await Ticket.findById(req.params.id);
  if (!ticket) {
    res.status(404);
    throw new Error("Ticket not found");
  }
  await ticket.remove();
  res.status(200).json({ success: true });
});
const updateTicket = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not identified");
  }
  const ticket = await Ticket.findById(req.params.id);
  if (!ticket) {
    res.status(404);
    throw new Error("Ticket not found");
  }
  const updatedTicket = await Ticket.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json(updatedTicket);
});

const createTicket = asyncHandler(async (req, res) => {
  const { description, project } = req.body;
  if (!project || !description) {
    res.status(400);
    throw new Error("Please add required fields");
  }
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not identified");
  }
  const ticket = await Ticket.create({
    title: project,
    description,
    user: req.user.id,
    status: "New",
  });
  res.status(201).json(ticket);
});

const updateStatus = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not identified");
  }
  const ticket = await Ticket.findById(req.params.id);
  if (!ticket) {
    res.status(404);
    throw new Error("Ticket not found");
  }
  const updatedTicket = await Ticket.findByIdAndUpdate(req.params.id, {
    status: req.body.status,
  });
  res.status(201).json(updatedTicket);
});

export {
  getTickets,
  createTicket,
  getTicket,
  deleteTicket,
  updateTicket,
  updateStatus,
};
