import { axiosInstance } from "./axiosInstance";

export const getRoutes = async () => {
  const res = await axiosInstance.get("/routes");
  return res.data.data;
};
