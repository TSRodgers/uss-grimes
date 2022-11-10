import React from "react";
import Carousel from 'react-bootstrap/Carousel'



// const Home = () => {
//   return (
//     <div className='Home'>
//       <Carousel>
//         <CarouselItem>USS Grimes</CarouselItem>
//         <CarouselItem>Picture</CarouselItem>
//         <CarouselItem>Boat</CarouselItem>
//       </Carousel>
//     </div>
//   );
// };

export default function Home() {
  
  return (

    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.history.com/.image/t_share/MTU3OTIzNjU0NDk4NzIzNDc0/the-pictures-that-defined-world-war-iis-featured-photo.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://d1zobuonyq0aiw.cloudfront.net/images/thoughthub/thumbnails/2015/7-Interesting-Features-of-World-War-2-2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://s.hdnux.com/photos/73/43/27/15611372/6/ratio3x2_1800.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

// export default Home