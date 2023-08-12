import './App.css';
import About from './components/About';
import Home from './components/Home';
import CustomNav from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CustomForm from './components/Form';
import BookDetails from './components/BookDetails';
import { createContext } from 'react';
import { useState } from 'react';

const context = createContext();

function App() {
  let [name, setName] = useState("Unknown")

  return (
    <div className="App">
      <context.Provider value={{ name, setName }}>
        <CustomNav />
        <Router>
          <Routes>
            <Route path="/" element={<CustomForm />} />
            <Route path='/home' element={<Home />} />
            <Route path='/home/:name' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='home/details/:id' element={<BookDetails />} />
          </Routes>
        </Router>
      </context.Provider>
    </div>
  );
}

export { context };
export default App;
