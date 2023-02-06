import axios from "axios";

const PORT = process.env.REACT_APP_PORT;

export const getAllRooms = () => axios.get(`${PORT}`);
