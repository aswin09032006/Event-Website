import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import RegistrationPage from "./components/registration/registration";
import Navbar from "./utils/navbar/navbar";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="registration" element={<RegistrationPage />} />
        {/* <Route path="otp" element={<OtpComponent />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
