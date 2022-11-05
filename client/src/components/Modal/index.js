import React from 'react'

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
        
      </div>
      <button onClick={onClose} type="button">
        Close this modal
      </button>
    </div>
  </div>
  )
}

export default Modal