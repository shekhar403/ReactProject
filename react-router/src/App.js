import About from './components/About';
import './App.css';
import Home from './components/Home';
import CustomNav from './Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <CustomNav />
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
