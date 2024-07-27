import logo from './logo.svg';
import './App.css';
import Calender from './calender'; // הייבוא של קובץ ה-JSX של הקלנדר
import Admin from './admin';
import NavBar from './navbar';
// import Gallery from './gallrey';
 import Images from './images';
import SuiteInfinity from './SuiteInfinity';
import Email, { ContactUs } from './ContactUs';
import About from './about';
// import './styles.scss'

function App() {
  return (
    <div>
   
   {<NavBar/> }
 <Images/>,
 {/* <Admin/>
 <SuiteInfinity/>
   
 <Gallery/> 
 <Images/>  */}
{/* <Images/> */}
{/* <Gallery/> */}

 <div id="footer">
<div class="footerItem">
  { <About/> }
  </div>
  <div class="footerItem">
  { <Calender/> } 
  </div>

  <div class="footerItem">
  { <ContactUs/>}
  </div>
</div> 
</div>
  );
}

export default App;
