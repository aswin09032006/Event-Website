import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import About from "./routes/about/about";
import ContactForm from "./routes/contact/contact";
import Home1 from "./routes/home/home1";
import RegistrationPage from "./routes/registration/registration";
import Sponsors from "./routes/sponsors/sponsors";


const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="registration" element={<RegistrationPage />} />
        <Route path="" element={<Home1 />} />
        <Route path="home" element={<Home1 />} />
        <Route path="sponsors" element={<Sponsors />} />
        <Route path="contact" element={<ContactForm />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
