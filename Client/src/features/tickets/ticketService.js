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

const getTickets = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.get(API_URL, config);
  return res.data;
};

const getTicket = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.get(`${API_URL}/${id}`, config);
  return res.data;
};

const updateStatus = async (id, status, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.put(`${API_URL}/status/${id}`, { status }, config);
  console.log(res.data);
  return res.data;
};

const ticketService = { create, getTickets, getTicket, updateStatus };

export default ticketService;
