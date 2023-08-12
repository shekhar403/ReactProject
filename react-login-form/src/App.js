import './App.css';
import CustomForm from './components/Form';
import Profile from './components/Profile';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App text-light text-center">
      

      <BrowserRouter>
      <Routes>
        <Route path='/profile/:name' element={<Profile />} />
        <Route path='/' element={<CustomForm />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
