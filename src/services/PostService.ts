import { useQuery, useMutation, useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import {
  fetchPosts,
  fetchPostById,
  createPost,
} from "../repositories/api/PostRepository";
import { Post, CreatePostRequest } from "../models/Post";

export const usePosts = () => {
  return useSuspenseQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
};

export const usePost = (id: number) => {
  return useQuery<Post, Error>({
    queryKey: ["post", id],
    queryFn: () => fetchPostById(id),
  });
};

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation<Post, Error, CreatePostRequest>({
    mutationFn: createPost,
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
  });
};
