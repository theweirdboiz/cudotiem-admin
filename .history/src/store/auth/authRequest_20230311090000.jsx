import axios from "@api";

export const requestAuthRegister = (data) => {
  console.log(data);
  return axios.post("/auth/register", {
    data,
  });
};
