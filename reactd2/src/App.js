import './App.css';
import CustomCards from './components/CardHolder';
import CustomCarousel from './components/Carousel';
import MainView from './components/MainView';
import CustomNavBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      
      <CustomNavBar />
      <MainView />
     <CustomCarousel />
     <h1 className='text-white text-center p-4'>---Horror Library---</h1>
     <CustomCards />
    </div>
  );
}

export default App;
