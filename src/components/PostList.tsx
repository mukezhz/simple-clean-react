import React, { Suspense } from "react";
import { usePosts } from "../services/PostService";
import UserItem from "./ListItem";

const PostList: React.FC = () => {
  const { data: posts } = usePosts();

  return (
    <ul>
      {posts?.map((post) => (
        <UserItem key={post.id} post={post} />
      ))}
    </ul>
  );
};

const PostListWrapper: React.FC = () => (
  <Suspense fallback={<div>Loading posts...</div>}>
    <PostList />
  </Suspense>
);

export default PostListWrapper;
