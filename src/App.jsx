import React, { createContext } from 'react';
import './App.css';
import CompA from './CompA';

const Firstname = createContext();

function App() {
  return (
    <>
      <Firstname.Provider value={"kunal"}>
        <CompA/>
      </Firstname.Provider>  
    </>
  );
}

export default App;
export { Firstname }; 
