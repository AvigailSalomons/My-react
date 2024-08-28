import logo from './logo.svg';
import './App.css';
import Calender from './calender'; // הייבוא של קובץ ה-JSX של הקלנדר
import Admin from './admin';
import NavBar from './navbar';
// import Gallery from './gallrey';
import Images from './images';
import Details from './details';
import SuiteInfinity from './SuiteInfinity';
import Email, { ContactUs } from './ContactUs';
import About from './about';
// import './styles.scss'
import FullImages from './fullImages'
import arrow from './images/arrow_5185200.png';
function App() {
  return (
    <div>
      <div id="big-container">
        <div id="navbar">  <NavBar /> </div>

        <div id="body">

          <div className="detalis">
            {/* <div id="details-header">מה במתחם</div> */}
            <img src={arrow} id="icon-arrow" alt="arrow icon" />
            <Details />
          </div>
          <div id="images">
            <div className='image'>
              <Images />
            </div>

          </div>
        </div>



        <div id="footer">
          <div class="footerItem">
            {<About />}
          </div>
          <div class="footerItem">
            {<Calender />}
          </div>

          <div class="footerItem">
            {<ContactUs />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
