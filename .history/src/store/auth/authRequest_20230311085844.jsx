import axios from "@api";

export const requestAuthRegister = (data) => {
  return axios.post("/auth/register", {
    data,
  });
};
