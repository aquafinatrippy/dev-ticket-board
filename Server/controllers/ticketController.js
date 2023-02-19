import asyncHandler from 'express-async-handler'
import { Ticket } from '../models/ticketModel.js'
import { User } from '../models/userModel.js'

const getTickets = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'get tickets'})
})

const createTicket = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'get tickets'})
})

export {getTickets, createTicket}