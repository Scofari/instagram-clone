import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/apiClient";
import { IAuthenticate } from "../types/authenticate.interface";

const apiClient = new APIClient<IAuthenticate>("/authenticate");

export const useCurrentUser = () =>
  useQuery<IAuthenticate, Error>({
    queryKey: ["auth"],
    queryFn: apiClient.getCurrentUser,
    staleTime: ms("24h"),
  });
