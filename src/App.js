import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';

export function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='/about-us' element = {<About/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
