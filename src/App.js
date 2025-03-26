import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Matrix from './Components/Matrix';

function App() {
  return (
    <>
       <Router>
        <Routes>
          <Route path="/" element={<Matrix />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
