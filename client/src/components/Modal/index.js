import React from 'react'

import CommentList from '../CommentList';

import CommentForm from '../CommentForm';
import Auth from '../../utils/auth';

const Modal = ({ onClose, currentPhoto }) => {
  const {name, description, photo, comments} = currentPhoto
  console.log(comments);

  return (
    <div className="modalBackdrop">
    <div className="modalContainer">
      <h3 className="modalTitle">{name}</h3>
      <img src={(`/images/${photo}`)} alt={name} />
      <p>
        {description}
      </p>
      <div>
        {comments.length ? (
          <CommentList comments={comments} />
        ) : <div>No one has left a comment yet!</div> }
        {Auth.loggedIn() && <CommentForm photoId={photo._id} />}
      </div>
      <button onClick={onClose} type="button">
        Close this modal
      </button>
    </div>
  </div>
  )
}

export default Modal