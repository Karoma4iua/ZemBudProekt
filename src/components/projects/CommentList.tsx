import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { uk } from 'date-fns/locale';

type Comment = {
  id: string;
  user_name: string;
  content: string;
  created_at: string;
};

type CommentListProps = {
  comments: Comment[];
};

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <div className="space-y-6">
      {comments.map((comment) => (
        <div key={comment.id} className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium">{comment.user_name}</span>
            <span className="text-sm text-gray-500">
              {formatDistanceToNow(new Date(comment.created_at), {
                addSuffix: true,
                locale: uk,
              })}
            </span>
          </div>
          <p className="text-gray-700">{comment.content}</p>
        </div>
      ))}
      
      {comments.length === 0 && (
        <p className="text-center text-gray-500">
          Поки що немає коментарів. Будьте першим!
        </p>
      )}
    </div>
  );
};

export default CommentList;