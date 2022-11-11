import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import PhotoItem from '../PhotoItem';
import Modal from '../Modal';
import { QUERY_PHOTOS } from '../../utils/queries';


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

  const [currentPhoto, setCurrentPhoto] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = (photo, i) => {
    setCurrentPhoto({...photo, index: i});
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div>
      {isModalOpen && <Modal currentPhoto={currentPhoto} onClose={toggleModal} />}
      <h2>Our Photos:</h2>
      {photos.length ? (
        <div className='row'>
          {filterPhotos().map((photo) => (
            
              <div className='col-12 col-sm-6 col-lg-3 p-3'>
                <PhotoItem 
                  key={photo._id}
                  _id={photo._id}
                  photo={photo.photo}
                  name={photo.name}
                  description={photo.description}
                  onClick={() => toggleModal(photo)}
                />
              </div>
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