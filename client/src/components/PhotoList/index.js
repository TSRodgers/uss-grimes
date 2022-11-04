import { useQuery } from '@apollo/client';
import React from 'react';
import PhotoItem from '../PhotoItem';
import { QUERY_PHOTOS } from '../../utils/queries';
import './index.css';


const PhotoList = ({ currentCategory }) => {
 
  const { loading, data } = useQuery(QUERY_PHOTOS);

  const photos = data?.photos || [];

  function filterPhotos() {
    if (!currentCategory) {
      return photos;
    }

    return photos.filter(
      (photo) => photo.category._id === currentCategory
    );
  }

  return (
    <div>
      <h2>Our Photos:</h2>
      {photos.length ? (
        <div>
          {filterPhotos().map((photo) => (
            <PhotoItem 
              key={photo._id}
              _id={photo._id}
              photo={photo.photo}
              name={photo.name}
              description={photo.description}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any photos yet!</h3>
      )}
      {loading ? <h1>Loading...</h1> : null}
    </div>
  );
}

export default PhotoList;