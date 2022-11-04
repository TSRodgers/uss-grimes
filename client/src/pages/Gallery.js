import React, { useState } from 'react';
import PhotoList from '../components/PhotoList';
import CategoryMenu from '../components/CategoryMenu';

const Gallery = () => {
  const [currentCategory, setCategory] = useState('');

  return (
    <div>
      <CategoryMenu setCategory={setCategory} />
      <PhotoList currentCategory={currentCategory} />
    </div>
  )
}

export default Gallery;