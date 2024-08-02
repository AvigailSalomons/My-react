import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';

function CarouselControlsReplacement() {
  useEffect(() => {
    const prevButton = document.querySelector('.carousel-control-prev-icon');
    const nextButton = document.querySelector('.carousel-control-next-icon');

    if (prevButton) {
      prevButton.innerHTML = '';
      const prevIcon = document.createElement('span');
      prevIcon.className = 'MuiIcon-root';
      ReactDOM.render(<NavigateBeforeOutlinedIcon style={{
        position: 'absolute',
        top: '50%',
        right: '15px',
        transform: 'translateY(-50%)',
        width: '50px',
        height: '50px',
        borderRadius: '50px',
        background: 'rgba(0,0,0,.3)',
        
      }} />, prevIcon);
      prevButton.appendChild(prevIcon);
    }

    if (nextButton) {
      nextButton.innerHTML = '';
      const nextIcon = document.createElement('span');
      nextIcon.className = 'MuiIcon-root';
      ReactDOM.render(<NavigateNextOutlinedIcon
        style={{
            position: 'absolute',
            top: '50%',
            left: '15px',
            transform: 'translateY(-50%)',
            width: '50px',
            height: '50px',
            borderRadius: '50px',
            background: 'rgba(0,0,0,.3)',
          
        
          }}  />, nextIcon);
      nextButton.appendChild(nextIcon);
    }
  }, []);

  return null; // רכיב זה אינו מציג דבר בעצמו, רק מבצע החלפה
}

export default CarouselControlsReplacement;
