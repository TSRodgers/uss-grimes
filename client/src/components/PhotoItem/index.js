import React from 'react'

const PhotoItem = (item) => {
  const {
    photo,
    name,
  } = item
  return (
    <div>
      <img 
        alt={name}
        src={`/images/${photo}`}
      />
    </div>
  )
}

export default PhotoItem;