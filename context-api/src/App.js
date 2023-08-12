import './App.css';
import ComponentA from './components/ComponentA';
import {createContext} from 'react';

const context = createContext();

function App() {
  let a = "Hello";
  let b = " Shekhar";
 

  return (
    <div className="App">
      <context.Provider value={{a, b}} >
      <ComponentA />
      </context.Provider>
    </div>
  );
}

export {context};
export default App;
