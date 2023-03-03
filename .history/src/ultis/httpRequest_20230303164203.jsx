import axios from "axios";

const httpRequest = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER_URL,
});

export const get = async (path, options = {}) => {
  const response = await httpRequest.get(path, options);
  return response.data;
};

export default httpRequest;
