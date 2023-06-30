import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/apiClient";
import { IPost } from "../types/post.interface";

const apiClient = new APIClient<IPost>("/posts");

export const usePost = (id: number | string) =>
  useQuery({
    queryKey: ["posts", id],
    queryFn: () => apiClient.getById(Number(id)),
    enabled: !!id,
    staleTime: ms("24h"),
  });
