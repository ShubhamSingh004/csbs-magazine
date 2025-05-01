import React, { useState } from 'react';
import Navbar from './components/navbar/NavBar';
import MainSection from './components/main-section/MainSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar setCurrentPage/>
      <MainSection />
    </div>
  );
}

export default App;
