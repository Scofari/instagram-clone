import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/apiClient";
import { IUser } from "../types/user.interface";

const apiClient = new APIClient<IUser>("/users");

export const useUsers = () =>
  useQuery({
    queryKey: ["users"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
