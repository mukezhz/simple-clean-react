// src/repositories/UserRepository.ts
import ky from "ky";
import { Post, CreatePostRequest } from "../models/Post";

const api = ky.create({
  prefixUrl: "https://jsonplaceholder.typicode.com/posts/1",
});

export const fetchPosts = async (): Promise<Post[]> => {
  return await api.get("posts").json<Post[]>();
};

export const fetchPostById = async (id: number): Promise<Post> => {
  return await api.get(`posts/${id}`).json<Post>();
};

export const createPost = async (newPost: CreatePostRequest): Promise<Post> => {
  return await api.post("posts", { json: newPost }).json<Post>();
};
