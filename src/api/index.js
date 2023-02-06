import axios from "axios";

const PORT = process.env.REACT_APP_PORT;

export const login = () => axios.post()

export const getAllRooms = () => axios.get(`${PORT}room`);
