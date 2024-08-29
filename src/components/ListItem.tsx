import React from 'react';
import { Post } from '../models/Post';

interface UserItemProps {
  post: Post;
}

const UserItem: React.FC<UserItemProps> = ({ post }) => (
  <li>
    {post.id} - {post.title}
  </li>
);

export default UserItem;
