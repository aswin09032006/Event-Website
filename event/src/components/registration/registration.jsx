import { getAuth, RecaptchaVerifier } from "firebase/auth";
import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import app from "../../firebase.config";
import "./registration.css";

const auth = getAuth(app);

const RegistrationPage = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [regNo, setRegNo] = useState("");
  const [course, setCourse] = useState("");
  const [hORd, setHorD] = useState("");
  const [hostelID, setHostelID] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpField, setShowOtpField] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Added state for loading indicator

  useEffect(() => {
    // Reset loading state when verification is complete
    if (isVerified) {
      setIsLoading(false);
    }
  }, [isVerified]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !name ||
      !gender ||
      !dob ||
      !email ||
      !mobile ||
      !regNo ||
      !course ||
      !hORd ||
      (hORd === "Hosteller" && !hostelID)
    ) {
      alert("Please fill all the fields");
      return;
    }
    const formData = { name, gender, dob, email, mobile, regNo, course, hORd };
    console.log("Form Data Submitted: ", formData);
  };

  const handleVerifyClick = async () => {
    setIsLoading(true); // Set loading indicator while processing
    try {
      const appVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          // ... other reCAPTCHA options
        },
        auth
      );

      await appVerifier.render(); // Wait for rendering to complete

      const confirmationResult = await signInWithPhoneNumber(
        `+${mobile}`,
        appVerifier
      );
      setConfirmationResult(confirmationResult);
      setShowOtpField(true);
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("Failed to send OTP. Please try again.");
    } finally {
      setIsLoading(false); // Ensure loading indicator is reset
    }
  };

  const handleVerifyOtpClick = () => {
    confirmationResult
      .confirm(otp)
      .then((result) => {
        console.log("OTP verification successful:", result.user);
        setIsVerified(true); // Set the verification state to true
      })
      .catch((error) => {
        console.error("Error verifying OTP", error);
        alert("Invalid OTP. Please try again.");
      });
  };

  return (
    <div className="registration-page-container">
      <div className="registration-page-header">
        <h1>Register here</h1>
      </div>
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="field">
          <h3 className="field-title">Name</h3>
          <input
            type="text"
            className="field-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <h3 className="field-title">Gender</h3>
          <select
            className="field-input"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div className="field">
          <h3 className="field-title">Date of Birth</h3>
          <input
            type="date"
            className="field-input"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div className="field">
          <h3 className="field-title">Mobile Number</h3>
          <PhoneInput
            country={"in"}
            value={mobile}
            onChange={(phone) => setMobile(phone.replace(/\D/g, ""))} // Clean phone input
          />
          <button
            type="button"
            onClick={handleVerifyClick}
            className="verify-button"
            disabled={isLoading} // Disable button while loading
          >
            {isLoading ? "Sending..." : "Verify"}
          </button>
        </div>
        <div id="recaptcha-container"></div>
        {showOtpField && (
          <div className="field">
            <h3 className="field-title">Enter OTP</h3>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              placeholder=" "
              renderSeparator={<span>-</span>}
              renderInput={(props) => (
                <input {...props} style={{ width: "30px", height: "30px" }} />
              )}
            />
            <div className="submit-btn">
              <button type="button" onClick={handleVerifyOtpClick}>
                {isVerified ? "Verified" : "Submit OTP"}
              </button>
            </div>
          </div>
        )}
        <div className="field">
          <h3 className="field-title">Email</h3>
          <input
            type="email"
            className="field-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <h3 className="field-title">Registration Number</h3>
          <input
            type="text"
            className="field-input"
            value={regNo}
            onChange={(e) => setRegNo(e.target.value)}
          />
        </div>
        <div className="field">
          <h3 className="field-title">Course</h3>
          <select
            className="field-input"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="">Select</option>
            <option value="B.Tech">B.Tech</option>
            <option value="M.Tech">M.Tech</option>
            <option value="MBA">MBA</option>
          </select>
        </div>
        <div className="field">
          <h3 className="field-title">Hosteller/Dayscholar</h3>
          <select
            className="field-input"
            value={hORd}
            onChange={(e) => setHorD(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Hosteller">Hosteller</option>
            <option value="Dayscholar">Dayscholar</option>
          </select>
        </div>
        {hORd === "Hosteller" && (
          <div className="field">
            <h3 className="field-title">Hostel ID</h3>
            <input
              type="text"
              value={hostelID}
              onChange={(e) => setHostelID(e.target.value)}
              className="field-input"
            />
          </div>
        )}
        <div className="button">
          <button
            type="submit"
            className="button-input"
            disabled={!isVerified}
            onClick={handleSubmit}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;
