"use client"
import { useState } from 'react';

interface CommentSectionProps {
  blogId: string;
}

const CommentSection = ({ blogId }: CommentSectionProps) => {
  // State to handle form input
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([
    { id: 1, author: 'John Doe', text: 'Great post!' },
    { id: 2, author: 'Jane Smith', text: 'Very informative, thanks for sharing!' },
    { id: 3, author: 'Alice Cooper', text: 'I loved this blog post, keep it up!' },
  ]);

  // Handle input change
  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentText(e.target.value);
  };

  // Handle comment submission
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.trim() === '') return; // Avoid submitting empty comments

    // Simulate adding the comment to the state
    const newComment = {
      id: comments.length + 1,
      author: 'Anonymous', // You can change this to the logged-in user's name
      text: commentText,
    };
    setComments([newComment, ...comments]); // Add the new comment to the top
    setCommentText(''); // Clear the input after submission
  };

  return (
    <div className="mt-10 bg-white p-6 rounded-md shadow-md">
      <h3 className="text-2xl font-semibold">Comments</h3>
      <div className="mt-4">
        {comments.map((comment) => (
          <div key={comment.id} className="mb-4">
            <p className="font-semibold">{comment.author}</p>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>

      {/* Comment Form */}
      <div className="mt-6">
        <h4 className="text-lg font-semibold">Leave a Comment</h4>
        <form onSubmit={handleCommentSubmit}>
          <textarea
            rows={4}
            value={commentText}
            onChange={handleCommentChange}
            className="w-full p-2 mt-2 border border-gray-300 rounded-md"
            placeholder="Write your comment here..."
          />
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 duration-200"
          >
            Submit Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentSection;
