import React from 'react'

const PhotoItem = ({ photo, name, onClick }) => {

  return (
    <div>
      <img 
        alt={name}
        src={`/images/${photo}`}
        onClick={onClick}
        className='w-100'
      />
    </div>
  )
}

export default PhotoItem;