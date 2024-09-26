import React, { useState } from "react";
import CalenderUser from '../calenderUser';
import './App.css';
import Calender from './Calendar/calender'; // הייבוא של קובץ ה-JSX של הקלנדר
import Customers from './Customers/customers'; // הייבוא של קובץ ה-JSX של הקלנדר

// import Admin from './admin';
import NavBar from './NavBar/navbar';
// import Gallery from './gallrey';
import Images from './Image/images';
import Details from './Details/details';
// import Email, { ContactUs } from './ContactUs/ContactUs';
// import About from './About/about';
// import './styles.scss'
// import FullImages from './fullImages'
// import arrow from './images/arrow_5185200.png';


function App() {

  
 
  return (
    <div>
   <div id ="navBarContainer">
    <NavBar/>
   </div>
   <div id= "container1">
    <div id = "carouselContainer">
      <Images/>
    </div>
    <div id="detailsContainer">
      <div id="detailsHeader">
        <h1>מה במחתם</h1>    
        <p>מתחם ענק</p>
        <p>נוף מטורף ממירון עד החרמון</p>
        <p>---------------------------------------------------</p>
      
    </div>
    <div id="detailsIcons">
<Details/>
    </div>
   </div>
    </div>
    <div id="container2">
{/* <CalenderUser/> */}
      <Calender/>
      <Customers/>
    </div>
  
             
      </div>


    
  );
}

export default App;
