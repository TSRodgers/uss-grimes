import { useQuery } from "@apollo/client";
import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import { QUERY_PHOTOS } from '../utils/queries';
import PhotoItem from '../components/PhotoItem';



export default function Home() {
  const { data } = useQuery(QUERY_PHOTOS);

  const photos = data?.photos || [];
  
  return (

<div className="container">
     <div className="mx-auto mt-5">
        <Carousel variant="dark">
          {photos.map((photo) => (
            <Carousel.Item>
              <PhotoItem 
                  key={photo._id}
                  _id={photo._id}
                  photo={photo.photo}
                  name={photo.name}
                  description={photo.description}
                />
            </Carousel.Item>
          ))}
        </Carousel>
     </div>
</div>
  );
}

// export default Home