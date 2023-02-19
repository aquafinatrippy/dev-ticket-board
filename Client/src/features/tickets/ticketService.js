import axios from "axios";

const API_URL = "/api/tickets";

const create = async (ticketData) => {
  const res = await axios.post(API_URL, ticketData);
  return res.data;
};

const ticketService = { create };

export default ticketService;
