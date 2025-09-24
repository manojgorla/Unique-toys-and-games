import React, { useState } from 'react';
import { MessageSquare, ThumbsUp, ThumbsDown } from 'lucide-react';

const CommentComponent = () => {
  // Sample initial comments - in a real app this would come from an API
  const [comments, setComments] = useState([
    {
      id: 1,
      username: 'wade_wilson6_9',
      avatarUrl: '/api/placeholder/40/40',
      timeAgo: '3 months ago',
      content: 'thats what we need . Every creator are using multer and showing how to upload file in your local computer storage, as a file. But in real world we don\'t store image in our local computer as a file format if we want to make a production ready web app. Their main purpose is just make the course and get lot of view and earn money they doesn\'t care about quality content. Thank you for that particular part',
      likes: 81,
      dislikes: 0,
      userLiked: false,
      userDisliked: false,
      replies: [],
      showReplies: false,
      timestamp: '6:02:30'
    },
    {
      id: 2,
      username: 'dreamsachiever212',
      avatarUrl: '/api/placeholder/40/40',
      timeAgo: '4 months ago',
      content: 'Damn I like this extra mile in doing things. Creating a min app just to showcase the course content 🎉',
      likes: 12,
      dislikes: 0,
      userLiked: false,
      userDisliked: false,
      replies: [],
      showReplies: false
    }
  ]);

 
  const [newComment, setNewComment] = useState('');
  const [replyTexts, setReplyTexts] = useState({});
  const [showReplyInputs, setShowReplyInputs] = useState({});

  // Handle comment submission
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    
    const newCommentObj = {
      id: comments.length + 1,
      username: 'current_user', // In a real app, get from auth
      avatarUrl: '/api/placeholder/40/40',
      timeAgo:Date(),
      content: newComment,
      likes: 0,
      dislikes: 0,
      userLiked: false,
      userDisliked: false,
      replies: []
    };
    
    setComments([...comments, newCommentObj]);
    setNewComment('');
  };

  // Handle likes and dislikes
  const handleLike = (commentId) => {
    setComments(comments.map(comment => {
      if (comment.id === commentId) {
        // If already liked, unlike
        if (comment.userLiked) {
          return {
            ...comment,
            likes: comment.likes - 1,
            userLiked: false
          };
        }
        // If disliked, remove dislike and add like
        else if (comment.userDisliked) {
          return {
            ...comment,
            likes: comment.likes + 1,
            dislikes: comment.dislikes - 1,
            userLiked: true,
            userDisliked: false
          };
        }
        // Otherwise just add like
        else {
          return {
            ...comment,
            likes: comment.likes + 1,
            userLiked: true
          };
        }
      }
      return comment;
    }));
  };

  const handleDislike = (commentId) => {
    setComments(comments.map(comment => {
      if (comment.id === commentId) {
        // If already disliked, un-dislike
        if (comment.userDisliked) {
          return {
            ...comment,
            dislikes: comment.dislikes - 1,
            userDisliked: false
          };
        }
        // If liked, remove like and add dislike
        else if (comment.userLiked) {
          return {
            ...comment,
            likes: comment.likes - 1,
            dislikes: comment.dislikes + 1,
            userLiked: false,
            userDisliked: true
          };
        }
        // Otherwise just add dislike
        else {
          return {
            ...comment,
            dislikes: comment.dislikes + 1,
            userDisliked: true
          };
        }
      }
      return comment;
    }));
  };

  // Handle replies
  const toggleReplyInput = (commentId) => {
    setShowReplyInputs({
      ...showReplyInputs,
      [commentId]: !showReplyInputs[commentId]
    });
    // Initialize reply text if needed
    if (!replyTexts[commentId]) {
      setReplyTexts({
        ...replyTexts,
        [commentId]: ''
      });
    }
  };

  const handleReplyChange = (commentId, text) => {
    setReplyTexts({
      ...replyTexts,
      [commentId]: text
    });
  };

  const handleReplySubmit = (e, commentId) => {
    e.preventDefault();
    const replyText = replyTexts[commentId];
    if (!replyText || !replyText.trim()) return;

    setComments(comments.map(comment => {
      if (comment.id === commentId) {
        const newReply = {
          id: `${commentId}-reply-${comment.replies.length + 1}`,
          username: 'current_user', // In a real app, get from auth
          avatarUrl: '/api/placeholder/40/40',
          timeAgo: Date().slice(15,23),
          content: replyText,
          likes: 0,
          dislikes: 0,
          userLiked: false,
          userDisliked: false
        };
        
        return {
          ...comment,
          replies: [...comment.replies, newReply],
          showReplies: true // Auto-expand replies
        };
      }
      return comment;
    }));

    // Clear the reply input
    setReplyTexts({
      ...replyTexts,
      [commentId]: ''
    });
    setShowReplyInputs({
      ...showReplyInputs,
      [commentId]: false
    });
  };

  const toggleReplies = (commentId) => {
    setComments(comments.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          showReplies: !comment.showReplies
        };
      }
      return comment;
    }));
  };

  // Like/dislike replies
  const handleReplyLike = (commentId, replyId) => {
    setComments(comments.map(comment => {
      if (comment.id === commentId) {
        const updatedReplies = comment.replies.map(reply => {
          if (reply.id === replyId) {
            if (reply.userLiked) {
              return { ...reply, likes: reply.likes - 1, userLiked: false };
            } else if (reply.userDisliked) {
              return { ...reply, likes: reply.likes + 1, dislikes: reply.dislikes - 1, userLiked: true, userDisliked: false };
            } else {
              return { ...reply, likes: reply.likes + 1, userLiked: true };
            }
          }
          return reply;
        });
        return { ...comment, replies: updatedReplies };
      }
      return comment;
    }));
  };

  const handleReplyDislike = (commentId, replyId) => {
    setComments(comments.map(comment => {
      if (comment.id === commentId) {
        const updatedReplies = comment.replies.map(reply => {
          if (reply.id === replyId) {
            if (reply.userDisliked) {
              return { ...reply, dislikes: reply.dislikes - 1, userDisliked: false };
            } else if (reply.userLiked) {
              return { ...reply, likes: reply.likes - 1, dislikes: reply.dislikes + 1, userLiked: false, userDisliked: true };
            } else {
              return { ...reply, dislikes: reply.dislikes + 1, userDisliked: true };
            }
          }
          return reply;
        });
        return { ...comment, replies: updatedReplies };
      }
      return comment;
    }));
  };


  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-md shadow">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold flex items-center">
          <span>{comments.length} Comments</span>
    
        </h2>
      </div>

      {/* Add new comment form */}
      <div className="p-4 flex">
        <div className="flex-shrink-0 mr-3">
          <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
            P
          </div>
        </div>
        <form onSubmit={handleCommentSubmit} className="flex-grow">
          <input
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
          />
        </form>
      </div>

      {/* Comments list */}
      <div className="divide-y h-72 overflow-y-scroll">
        {comments.map(comment => (
          <div key={comment.id} className="p-4">
            <div className="flex">
              <div className="flex-shrink-0 mr-3">
                <img 
                  src={comment.avatarUrl} 
                  alt={comment.username} 
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <div className="flex-grow">
                <div className="flex items-center">
                  <span className="font-semibold text-sm">@{comment.username}</span>
                  <span className="text-gray-500 text-xs ml-2">{comment.timeAgo}</span>
                  {comment.timestamp && (
                    <span className="text-gray-500 text-xs ml-2">{comment.timestamp}</span>
                  )}
                  {/* <button className="ml-auto">
                    <span className="text-xl">⋯</span>
                  </button> */}
                </div>
                <div className="mt-1">{comment.content}</div>
                <div className="mt-2 flex items-center text-sm">
                  <button 
                    className={`flex items-center mr-4 ${comment.userLiked ? 'text-blue-500' : 'text-gray-600'}`} 
                    onClick={() => handleLike(comment.id)}
                  >
                    <ThumbsUp size={16} className="mr-1" />
                    <span>{comment.likes}</span>
                  </button>
                  <button 
                    className={`flex items-center mr-4 ${comment.userDisliked ? 'text-red-500' : 'text-gray-600'}`} 
                    onClick={() => handleDislike(comment.id)}
                  >
                    <ThumbsDown size={16} className="mr-1" />
                  </button>
                  <button 
                    className="text-gray-600 hover:text-gray-900"
                    onClick={() => toggleReplyInput(comment.id)}
                  >
                    Reply
                  </button>
                </div>

                {/* Reply form */}
                {showReplyInputs[comment.id] && (
                  <div className="mt-3 pl-3">
                    <form onSubmit={(e) => handleReplySubmit(e, comment.id)} className="flex">
                      <div className="flex-shrink-0 mr-2">
                        <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold">
                          P
                        </div>
                      </div>
                      <input
                        type="text"
                        placeholder="Write a reply..."
                        value={replyTexts[comment.id] || ''}
                        onChange={(e) => handleReplyChange(comment.id, e.target.value)}
                        className="flex-grow border rounded-md px-2 py-1 text-sm"
                      />
                    </form>
                  </div>
                )}

                {/* Replies section */}
                {comment.replies.length > 0 && (
                  <div className="mt-3">
                    <button 
                      className="text-blue-500 text-sm flex items-center"
                      onClick={() => toggleReplies(comment.id)}
                    >
                      <MessageSquare size={14} className="mr-1" />
                      {comment.showReplies ? 'Hide' : 'Show'} {comment.replies.length} {comment.replies.length === 1 ? 'reply' : 'replies'}
                    </button>
                    
                    {comment.showReplies && (
                      <div className="mt-2 pl-3 border-l-2 border-gray-200">
                        {comment.replies.map(reply => (
                          <div key={reply.id} className="mt-3">
                            <div className="flex">
                              <div className="flex-shrink-0 mr-2">
                                <img 
                                  src={reply.avatarUrl} 
                                  alt={reply.username} 
                                  className="w-6 h-6 rounded-full"
                                />
                              </div>
                              <div className="flex-grow">
                                <div className="flex items-center">
                                  <span className="font-semibold text-xs">@{reply.username}</span>
                                  <span className="text-gray-500 text-xs ml-2">{reply.timeAgo}</span>
                                </div>
                                <div className="text-sm mt-1">{reply.content}</div>
                                <div className="mt-1 flex items-center text-xs">
                                  <button 
                                    className={`flex items-center mr-3 ${reply.userLiked ? 'text-blue-500' : 'text-gray-600'}`} 
                                    onClick={() => handleReplyLike(comment.id, reply.id)}
                                  >
                                    <ThumbsUp size={12} className="mr-1" />
                                    <span>{reply.likes}</span>
                                  </button>
                                  <button 
                                    className={`flex items-center mr-3 ${reply.userDisliked ? 'text-red-500' : 'text-gray-600'}`} 
                                    onClick={() => handleReplyDislike(comment.id, reply.id)}
                                  >
                                    <ThumbsDown size={12} className="mr-1" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    {/* -- */}
                
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentComponent;