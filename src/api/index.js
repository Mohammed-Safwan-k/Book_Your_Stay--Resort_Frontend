import axios from "axios";

const AUTH = process.env.REACT_APP_PORT_AUTH;
const PORT = process.env.REACT_APP_PORT_RESORT;

// AUTH.interceptors.request.use((req) => {
//   if (localStorage.getItem("profile")) {
//     req.headers.Authorization = `Bearer ${
//       JSON.parse(localStorage.getItem("profile")).token
//     }`;
//   }
//   return req;
// });

export const doLogin = (login) => axios.post(`${AUTH}resortLogin`, login);
export const doSignUp = (signUp) => axios.post(`${AUTH}resortSignup`, signUp);
export const doLogout = () => axios.post(`${AUTH}logout`);

export const getAllRooms = (token) =>
  axios.post(`${PORT}allroom`, { headers: { Authorization: token } });

export const  getAllFacility = async (token) =>
  await axios.get(`${PORT}facility`, { headers: { Authorization: token } });

export const getAllRoomType = async (token) =>
  await axios.get(`${PORT}roomtype`, { headers: { Authorization: token } });

export const addRoom = (token, room) =>
  axios.post(`${PORT}addroom`, { headers: { Authorization: token } }, room);
