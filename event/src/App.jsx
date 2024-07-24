import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./routes/home/home";
import RegistrationPage from "./routes/registration/registration";


const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="registration" element={<RegistrationPage />} />
        <Route path="" element={<Home />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
