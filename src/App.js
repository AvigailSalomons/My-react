import logo from './logo.svg';
import './App.css';
import Calender from './calender'; // הייבוא של קובץ ה-JSX של הקלנדר
import Admin from './admin';
import NavBar from './navbar';
import Gallery from './gallrey';
import Images from './SuiteInfinity';
import SuiteInfinity from './SuiteInfinity';

function App() {
  return (
    <div>
   
  <NavBar/> ,
 {/* <Admin/>
 <SuiteInfinity/>
   
 <Gallery/> 
 <Images/>  */}
<Calender/>
</div>
  );
}

export default App;
