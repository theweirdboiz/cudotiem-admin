import axios from "axios";

export const requestAuthRegister = (data) => {
  return axios.post("/auth/register", {
    data,
  });
};
