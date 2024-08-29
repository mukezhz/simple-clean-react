// src/components/CreatePost.tsx
import React, { useState } from "react";
import { useCreatePost } from "../services/PostService";

const CreatePost: React.FC = () => {
  const [title, setTitle] = useState("");
  const [userID, setUserID] = useState(0);
  const [body, setBody] = useState("");
  const createPostMutation = useCreatePost();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (title && userID) {
      createPostMutation.mutate({
        title,
        userId: userID,
        body: body,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="userId">Content:</label>
        <textarea
          id="userId"
          value={userID}
          onChange={(e) => setUserID(Number(e.target.value) || 0)}
        />
      </div>
      <div>
        <label htmlFor="body">Content:</label>
        <textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <button type="submit" disabled={createPostMutation.isPending}>
        {createPostMutation.isPending ? "Creating..." : "Create Post"}
      </button>
      {createPostMutation.isError && (
        <div>Error: {createPostMutation.error?.message}</div>
      )}
    </form>
  );
};

export default CreatePost;
