import axios from "axios";

const API = axios.create({
  baseURL: "https://r1.edkt.net/api/s/dynamic-page/new-home-page?contentBlock=Object", 
  headers: { "Content-Type": "application/json" },
});

export const getUsers = () => API.get("/users");
export const createUser = (payload) => API.post("/users", payload);

