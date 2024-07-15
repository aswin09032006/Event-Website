import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import OtpComponent from "./components/OTP/otp";
import RegistrationPage from "./components/registration/registration";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="registration" element={<RegistrationPage />} />
        <Route path="otp" element={<OtpComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
