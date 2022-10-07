import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/pages/AboutMe.js';
import Contact from './components/pages/Contact.js';
import Portfolio from './components/pages/Portfolio.js';
import Resume from './components/pages/Resume.js';
import Navigation from './components/Navigation.js';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<AboutMe />} />
          <Route path='/Portfolio' element={<Portfolio />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Resume' element={<Resume />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
