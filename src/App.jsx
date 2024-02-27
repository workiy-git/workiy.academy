import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
<<<<<<<< Updated upstream:src/App.jsx
import Login from './components/login';
import LandingPage from './components/Landing_page';
import TodayCall from './components/calls/todaycalls';
========
import Login from './components/loginpage/login';
import Header from './components/organism/header';
>>>>>>>> Stashed changes:crm/src/App.jsx


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/header" element={<Header />} />
      
      </Routes>
    </Router>
  );
}

export default App;