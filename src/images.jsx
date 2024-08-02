import React, { useState } from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './styles.scss';
import './images.css';
import img1 from './images/1.jpeg';
import img2 from './images/2.jpeg';
import img3 from './images/3.jpeg';
import img4 from './images/4a.jpeg';
import CarouselControlsReplacement from './imageButton.jsx';

const images = [img3, img1, img2, img4]; // Array of images

export default function Images() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setActiveIndex(index); // Update active index to the clicked thumbnail index
  };

  return (
    
    <div id="carousel-all" className="carousel-container">
      
      <div className="thumbnail-column">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className='thumbnail'
            alt={`Thumbnail ${index + 1}`}
            onClick={() => handleThumbnailClick(index)} // Set active index on click
          />
        ))}
      </div>
    
      <MDBCarousel activeItem={activeIndex + 1} showIndicators showControls fade>
        {images.map((image, index) => (
          <MDBCarouselItem itemId={index + 1} key={index}>
            <img src={image} className='d-block w-100 img' alt={`Slide ${index + 1}`} />
            <MDBCarouselCaption>
              <h5>Slide label {index + 1}</h5>
              <p>Slide description for image {index + 1}</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        ))}
      </MDBCarousel>

      <CarouselControlsReplacement id="CarouselControlsReplacement" />
  
  </div>
  );
}
