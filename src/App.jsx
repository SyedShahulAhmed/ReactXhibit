import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Project from './components/Project';
import ProjectDetails from './components/ProjectDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Reacty from './components/Reacty';
import SectionReact from './components/SectionReact';
import ScrollToTop from './components/ScrollTop';

function App() {
  return (
    <Router>
      <div className="bg-[#061a40] w-full h-full overflow-x-hidden">
        <ToastContainer/>
        <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <SectionReact />
              <Reacty />
              <Project />
              <Contact />
            </>
          } />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
