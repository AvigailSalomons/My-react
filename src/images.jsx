import React, { useState } from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './styles.scss';
// import img1 from './images/11.jpg';
// import img3 from './images/3.jpeg';
// import img4 from './images/4a.jpeg';
// import img5 from './images/8.jpeg';
import img6 from './images/16.jpg';
import img7 from './images/15.JPG';
import img8 from './images/17.JPG';
import img9 from './images/18.JPG';
import img10 from './images/19.JPG';
import img11 from './images/20.JPG';
import img12 from './images/21.JPG';
import img13 from './images/22.JPG';
import img14 from './images/23.JPG';
import img615 from './images/24.JPG';
import img16 from './images/25.JPG';
import img17 from './images/26.JPG';
import img18 from './images/27.JPG';
import img19 from './images/28.JPG';
import img20 from './images/29.JPG';
import img21 from './images/30.JPG';
import img22 from './images/31.JPG';
import img23 from './images/32.JPG';



import img24 from './images/6.jpeg';



import CarouselControlsReplacement from './imageButton.jsx';

const images = [img7,img6,img8,img9,img10,img11,img12,img13,img14,img615,img16,img17,img18,img19,img20,img21,img22,img23,img24]; 

export default function Images() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setActiveIndex(index); // Update active index to the clicked thumbnail index
    console.log(index, "index");
  };

  return (
    <div id="carousel-all" className="carousel-container">
      <MDBCarousel showIndicators showControls fade activeItem={activeIndex + 1} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {images.map((image, index) => (
          <MDBCarouselItem itemId={index + 1} key={index}>
            <div id="img-div">
            <img src={image} className="img" alt={`Slide ${index + 1}`} />
            </div>
            <MDBCarouselCaption>
              {/* <h5>Slide label {index + 1}</h5> */}
          
            </MDBCarouselCaption>
          </MDBCarouselItem>
        ))}
      </MDBCarousel>

      <CarouselControlsReplacement id="CarouselControlsReplacement" />
    </div>
  );
}
