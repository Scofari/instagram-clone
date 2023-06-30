import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/apiClient";
import { ISuggestedFollower } from "../types/suggested-follower.interface";

const apiClient = new APIClient<ISuggestedFollower>("/suggested-followers");

export const useSuggestedFollowers = () =>
  useQuery({
    queryKey: ["suggested-followers"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
