import React from 'react';
import { TypePost } from '../../types';
import { Link } from '../link';

interface PostProps {
  post: TypePost;
}

export const PostTitle: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="flex  mb-10 border border-solid p-4 shadow">
      <div className="rounded-full overflow-hidden w-52 h-52 mr-4">
        <img src={post.image.url} alt="post picture" className=" h-full object-cover" />
      </div>
      <div className="flex flex-col self-stretch">
        <p className=" text-xs text-gray-600 grow-0 basis-1/2 shrink">
          {new Date(post.updatedAt).toLocaleString('en-US', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
          })}
        </p>
        <Link to={`/${post?.slug}`} className="text-xl text-blue-800 hover:text-blue-700">
          {post.title}
        </Link>
      </div>
    </div>
  );
};
