import React from 'react'

import CommentList from '../CommentList';

import CommentForm from '../CommentForm';
import Auth from '../../utils/auth';

const Modal = ({ onClose, currentPhoto }) => {
  const {name, description, photo, comments} = currentPhoto
  console.log(comments);

  return (
    <div className="modalBackdrop shadow-lg text-light">
    <div className="modalContainer">
      <h2 className="text-center">{name}</h2>
      <img src={(`/images/${photo}`)} alt={name} className="img-fluid"/>
     <div className='bg-dark p-3'>
          <p>
            {description}
          </p>
          {comments.length ? (
            <CommentList comments={comments} />
          ) : <div>No one has left a comment yet!</div> }
          {Auth.loggedIn() && <CommentForm photoId={photo._id} />}
        <button onClick={onClose} type="button">
          Close this modal
        </button>
     </div>
    </div>
  </div>
  )
}

export default Modal