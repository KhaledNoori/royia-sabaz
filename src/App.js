
import './App.css';
import  Home from'./components/pages/Home.js'
import About from './components/pages/AboutUS.js';
import Contact from './components/pages/ContatUs.js';
import { BrowserRouter as Router  ,Route ,Routes} from 'react-router-dom';
import Footer from './components/inc/Footer.js';
import Nav1 from './components/inc/Navbar.js';

function App() {
  return (


 
  <Router>
    <div className="App" dir='rtl'>
    
      <Nav1 />
          <Routes>
            <Route exact path='/' element={<Home />} / >
            <Route  path='/about' element={<About />} / >
            <Route  path='/contactUs' element={<Contact />} / >
             


     </Routes>
  
     </div>
     <Footer />
       </Router>
   
  );
}

export default App;
