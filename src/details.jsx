import React from 'react';
import './details.css';
import Chip from '@mui/material/Chip';
// import { faKey } from '@fortawesome/free-solid-svg-icons';
// import Groups2SharpIcon from '@mui/icons-material/Groups2Sharp';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import HotTubIcon from '@mui/icons-material/HotTub';
import pool from './images/pool.png';
import persons from './images/persons.png';
import trampoline from './images/t.png';
import room from './images/r.png';
import bed from './images/b.png';
import h from './images/h.png';
import taabun from './images/taabun.png';
import parkink from './images/p.png';
import grass from './images/g.png';
import sizufBed from './images/bs.png';







const details = [
    { icon:   <Chip icon={<HotTubIcon />}  />, text: 'גקוזי' },
    { icon:   <img src={pool}   className="icon-image" />, text: 'בריכה ענקית' },
    { icon:   <img src={bed}   className="icon-image" />, text: '30 מיטות' },
    { icon:   <img src={room}   className="icon-image" />,text: ' 11'+'חדרים' },
    { icon:   <img src={h}   className="icon-image" />,text: ' ערסלים ומתקני חצר' },
    { icon:   <img src={trampoline}   className="icon-image" />,text: ' טרמפולינה' },
    { icon:   <img src={sizufBed}   className="icon-image" />,text: ' מיטות שיזוף' },
    { icon:   <img src={parkink}   className="icon-image" />,text: 'חניה' },
    { icon:   <img src={grass}   className="icon-image" />,text: ' מדשאות' },
    { icon:   <img src={taabun}   className="icon-image" />,text: ' טאבון' },




   

  ];

function Details(){

    return (
        <div className="details-container">
          {details.map((detail, index) => {
            console.log("Processing detail: ", detail);
            console.log("index: ", index);
    
          })}
          {details.map((detail, index) => (
            <div className="detail-item" key={index}>
              <span className="detail-icon">{detail.icon}</span>
              <span className="detail-text">{detail.text}</span>
            </div>
          ))}
        </div>
      );
}


 export default Details;
