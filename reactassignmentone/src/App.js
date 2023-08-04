import './App.css';
import BackgroundToggler from './components/BackgroundToggler';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
     {<BackgroundToggler />}
     {<Login />}
     {<Signup />}
    </div>
  );
}








export default App;
