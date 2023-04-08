import axios from "axios";

const API_URL = "/api/tickets";

const create = async (ticketData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.post(API_URL, ticketData, config);
  return res.data;
};

const ticketService = { create };

export default ticketService;
