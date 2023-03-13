import axios from "axios";
export const api = authaxios.create({
  baseURL: import.meta.env.VITE_APP_SERVER_URL,
  withCredentials: true,
});

export const refreshAccessTokenFn = async () => {
  const response = await api.get("/auth/refresh");
  return response.data;
};

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const errMessage = error.response.data.message;
    if (errMessage.includes("not logged in") && !originalRequest._retry) {
      originalRequest._retry = true;
      await refreshAccessTokenFn();
      return authApi(originalRequest);
    }
    return Promise.reject(error);
  }
);
