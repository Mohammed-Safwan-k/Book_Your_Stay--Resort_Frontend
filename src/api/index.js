import axios from "axios";

const AUTH = process.env.REACT_APP_PORT_AUTH;
const PORT = process.env.REACT_APP_PORT;

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

export const getAllRooms = () => axios.get(`${PORT}room`);
