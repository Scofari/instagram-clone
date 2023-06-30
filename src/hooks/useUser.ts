import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/apiClient";
import { IUser } from "../types/user.interface";

const apiClient = new APIClient<IUser>("/users");

export const useUser = (username: string) =>
  useQuery({
    queryKey: ["users", username],
    queryFn: () => apiClient.getByName(username),
    staleTime: ms("24h"),
  });
