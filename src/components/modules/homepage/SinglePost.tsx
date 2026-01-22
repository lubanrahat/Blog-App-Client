import React from 'react';
import Image from 'next/image';
import { Calendar, Eye, MessageCircle, Tag } from 'lucide-react';

interface PostData {
  id: string;
  title: string;
  content: string;
  thumbnail: string;
  tags: string[];
  createdAt: string;
  views: number;
  authorId: string;
  _count: {
    comments: number;
  };
}

interface PostProps {
  post: PostData;
}

const SinglePost = ({ post }: PostProps) => {
  // Format the date to a readable string
  const formattedDate = new Date(post.createdAt).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <article className="max-w-4xl mx-auto overflow-hidden bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-slate-950 dark:border-slate-800">
      {/* Thumbnail Image */}
      {post.thumbnail && (
        <div className="relative w-full h-64 md:h-96">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="p-6 md:p-8">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full dark:bg-blue-900/30 dark:text-blue-400"
            >
              <Tag size={12} />
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
          {post.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-gray-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <Eye size={16} />
            <span>{post.views} views</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle size={16} />
            <span>{post._count.comments} comments</span>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-slate lg:prose-lg dark:prose-invert max-w-none">
          <p className="leading-relaxed text-gray-700 dark:text-slate-300">
            {post.content}
          </p>
        </div>
      </div>
    </article>
  );
};

export default SinglePost;