import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchPosts,
  fetchPostById,
  createPost,
} from "../repositories/PostRepository";
import { Post, CreatePostRequest } from "../models/Post";

export const usePosts = () => {
  return useQuery<Post[], Error>({
    queryKey: ["users"],
    queryFn: fetchPosts,
    initialData: [],
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
