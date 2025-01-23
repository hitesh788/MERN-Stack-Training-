import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Gallery from './Components/Gallery';
import Contact from './Components/contact';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Components/SignUp';
import UseState from './Components/UseState';
import UseEffect from './Components/UseEffect';

function App() {
  return (
    <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery image="SECE Logo" page="Gallery" />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path='/use-state' element={<UseState />}></Route>
            <Route path='use-effect' element={<UseEffect />}></Route>
          </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
