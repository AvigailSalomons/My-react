import React, { useEffect } from 'react';

import 'lightgallery/css/lightgallery.css'; // Import LightGallery styles
import lightGallery from 'lightgallery'; // Import LightGallery library
import lgThumbnail from 'lightgallery/plugins/thumbnail'; // Import Thumbnail plugin (optional)
const images = [
    {
      src: 'img/image1.jpg',
      thumb: 'img/thumb1.jpg',
      alt: 'Image 1',
    },
    {
      src: 'img/image2.jpg',
      thumb: 'img/thumb2.jpg',
      alt: 'Image 2',
    },
    // ... more images
  ];
  
  const Gallery = () => {
    useEffect(() => {
      const galleryElement = document.getElementById('lightgallery');
  
      if (galleryElement) {
        lightGallery(galleryElement, {
          // LightGallery settings
          speed: 500, // Animation speed
          plugins: [lgThumbnail], // Include thumbnail plugin
          selector: '.gallery-item a', // Selector for gallery items
          // ... other settings
        });
      }
    }, []);
  
    return (
      <div id="lightgallery" className="gallery">
        {images.map((image) => (
          <a key={image.src} href={image.src} data-lg-size="1600-900" className="gallery-item">
            <img src={image.thumb} alt={image.alt} />
          </a>
        ))}
      </div>
    );
  };
  
  export default Gallery;
  