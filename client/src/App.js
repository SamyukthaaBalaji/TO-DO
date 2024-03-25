import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Stud from "./Stud";


function App() {
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<Stud/>}/>
          
        </Routes>
      </Router>
    
  );
}

export default App;

