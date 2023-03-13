import axios from "axios";
export default authaxios.create({
  baseURL:import.meta.VITE_APP_SERVER_URL,
  withCredentials: true,
});

export const refreshAccessToken = async()=>{
  const response = await
}