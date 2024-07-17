import logo from './logo.svg';
import './App.css';
import Calender from './calender'; // הייבוא של קובץ ה-JSX של הקלנדר
import Admin from './admin';
import NavBar from './navbar';
import Gallery from './gallrey';
import Images from './SuiteInfinity';
import SuiteInfinity from './SuiteInfinity';
import Email, { ContactUs } from './ContactUs';

function App() {
  return (
    <div>
   
  <NavBar/> ,
 {/* <Admin/>
 <SuiteInfinity/>
   
 <Gallery/> 
 <Images/>  */}
<Calender/>
<ContactUs/>
</div>
  );
}

export default App;
