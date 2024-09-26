import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveIndex } from '../../store/imagesSlice';

const Images = () => {
    const dispatch = useDispatch();
    const { images, activeIndex } = useSelector(state => state.images);

    const handleThumbnailClick = (index) => {
        dispatch(setActiveIndex(index));
    };

    return (
        <div id="carousel-all" className="carousel-container">
            <MDBCarousel showIndicators showControls fade activeItem={activeIndex + 1}>
                {images.map((image, index) => (
                    <MDBCarouselItem itemId={index + 1} key={index}>
                        <img src={image} className="img" alt={`Slide ${index + 1}`} />
                    </MDBCarouselItem>
                ))}
            </MDBCarousel>
        </div>
    );
};

export default Images;
