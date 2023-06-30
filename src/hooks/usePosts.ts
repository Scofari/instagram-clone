import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/apiClient";
import { IPost } from "../types/post.interface";

const apiClient = new APIClient<IPost>("/posts");

export const usePosts = () =>
  useQuery({
    queryKey: ["posts"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
