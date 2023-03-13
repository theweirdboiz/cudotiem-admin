import axios from "axios";
export default authaxios.create({
  baseURL:import.meta.env.VITE_APP_SERVER_URL,
  withCredentials: true,
});

export const refreshAccessToken = async()=>{
  const response = await
}