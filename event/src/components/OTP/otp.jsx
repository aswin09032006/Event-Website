import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Make sure you have the CSS for phone input
import app from "../../firebase.config";

const auth = getAuth(app);

const Otp = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);

  const setupRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow sendOtp
          sendOtp();
        },
      },
      auth
    );
  };

  const sendOtp = () => {
    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, `+${phone}`, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message
        setConfirmationResult(confirmationResult);
      })
      .catch((error) => {
        // Error; SMS not sent
        console.error("SMS not sent", error);
      });
  };

  const verifyOtp = () => {
    confirmationResult
      .confirm(otp)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log("User signed in: ", user);
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        console.error("Verification failed", error);
      });
  };

  return (
    <div className="otp-container">
      <div className="send-otp">
        <PhoneInput
          country={"in"}
          value={phone}
          onChange={(phone) => setPhone(phone.replace(/\D/g, ""))} // Clean phone input
        />
        <button className="send-otp" type="button" onClick={sendOtp}>
          Send OTP
        </button>
      </div>
      {confirmationResult && (
        <div className="verify-otp">
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
          />
          <button className="verify-otp" type="button" onClick={verifyOtp}>
            Verify OTP
          </button>
        </div>
      )}
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default Otp;
