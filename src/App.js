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
import  FullImages from './fullImages'
function App() {
  return (
    <div>
    <div id="big-container">

   <NavBar/> 
   <div id="body"> 
   <div id="contaxt">
   <a href="/site/18767"></a>
   <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"><path fill-rule="evenodd" fill="rgb(0, 0, 17)" d="M25.6 25.6C19.8 31.5 10.2 31.5 4.4 25.6 -1.5 19.8-1.5 10.2 4.4 4.4 10.2-1.5 19.8-1.5 25.6 4.4 31.5 10.2 31.5 19.8 25.6 25.6ZM5.7 5.7C0.5 10.8 0.5 19.2 5.7 24.3 10.8 29.5 19.2 29.5 24.3 24.3 29.5 19.2 29.5 10.8 24.3 5.7 19.2 0.5 10.8 0.5 5.7 5.7ZM20.6 10.7L16 15.2 20.6 19.8C21 20.2 21 20.7 20.6 21.1 20.3 21.4 19.7 21.4 19.3 21.1L14.8 16.5 10.5 20.8C10.2 21.1 9.6 21.1 9.2 20.8 8.9 20.4 8.9 19.9 9.2 19.5L13.5 15.2 9.2 10.9C8.8 10.6 8.8 10 9.2 9.7 9.5 9.3 10.1 9.3 10.5 9.7L14.8 14 19.4 9.4C19.7 9 20.3 9 20.6 9.4 21 9.7 21 10.3 20.6 10.7Z"></path></svg>
    <div className='contaxt'>
   <br/>
   <br/>
   
    חדשה בשוק!!!! קומפלטס ענק רחב ידיים <br/>
    בעל 3 מפלסים על שטח של דונם <br/>
    נוף מטורף ממירון עד החרמון <br/>
    30 מיטות <br/>
    3 ג'וזי 
    בריכה גדולה <br/>
    ועוד בריכת ילדים
  </div></div>
   <div id="images">
    <div className='image'>
    <Images/>
    </div>


 </div>
 </div>


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
</div>
  );
}

export default App;
