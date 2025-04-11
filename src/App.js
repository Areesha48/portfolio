import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from './context/ThemeContext';
import Navbar from "./Components/Navbar";
import Footer from './Components/Footer';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import './App.css';

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="app-container">
          {/* Navbar is displayed on every page */}
          <Navbar />
          
          {/* Main content wrapper */}
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          
          {/* Footer is displayed on every page */}
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;



