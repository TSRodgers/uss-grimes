import React from 'react'

const CommentList = ({ comments }) => {
  return (
    <div>
      <div>Comments</div>
      <div>
        {comments &&
          comments.map(comment => (
            <p key={comment._id}>
              {comment.commentText} {'// '}
              {comment.username} on {comment.createdAt}
            </p>
          ))}
      </div>
    </div>
  );
};

export default CommentList;