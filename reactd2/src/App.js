import './App.css';
import About from './components/About';
import CustomCards from './components/CardHolder';
import CustomCarousel from './components/Carousel';
import Home from './components/Home';
import MainView from './components/MainView';
import CustomNav from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Welcome from './components/Welcome';
import BookDetails from './components/BookDetails';

function App() {
  return (
    <div className="App">
      
      <CustomNav />
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='home/details/:id' element={<BookDetails />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
