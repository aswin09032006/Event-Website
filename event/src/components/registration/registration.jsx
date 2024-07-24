import axios from "axios";
import QRCode from "qrcode.react";
import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./registration.css";

const RegistrationPage = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [regNo, setRegNo] = useState("");
  const [course, setCourse] = useState("");
  const [program, setProgram] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [hORd, setHorD] = useState("");
  const [hostelNo, setHostelNo] = useState("");
  const [upiLink, setUpiLink] = useState("");
  const [paymentScreenshot, setPaymentScreenshot] = useState(null);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);

  useEffect(() => {
    if (hORd === "Hosteller") {
      if (gender === "male") {
        setHostelNo("DH");
      } else if (gender === "female") {
        setHostelNo("GH");
      } else {
        setHostelNo("");
      }
    } else {
      setHostelNo("");
    }
  }, [gender, hORd]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !name ||
      !gender ||
      !dob ||
      !email ||
      !phone ||
      !regNo ||
      !bloodGroup||
      !program ||
      !course ||
      !hORd ||
      (hORd === "Hosteller" && !hostelNo)
    ) {
      alert("Please fill all the fields");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("gender", gender);
    formData.append("dob", dob);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("regNo", regNo);
    formData.append("course", course);
    formData.append("program", program);
    formData.append("bloodGroup", bloodGroup);
    formData.append("hORd", hORd);
    formData.append("hostelNo", hostelNo);
    if (paymentScreenshot) {
      formData.append("paymentScreenshot", paymentScreenshot);
    }

    axios
      .post("http://localhost:5000/register", formData)
      .then(() => {
        alert("Registration successful!");
      })
      .catch((error) => {
        console.error("Error storing data: ", error);
      });
  };

  const handleFileChange = (e) => {
    setPaymentScreenshot(e.target.files[0]);
  };

  const handlePaymentConfirmation = () => {
    if (!paymentScreenshot) {
      alert("Please upload a screenshot of the payment.");
      return;
    }

    setPaymentConfirmed(true);
    alert("Payment confirmed successfully!");
  };

  const handlePaymentClick = () => {
    const googlePayUpiID = "parthi1805@axl";
    const amount = 1;

    const upiIntentUrl = `upi://pay?pa=${googlePayUpiID}&pn=Your Company Name&am=${amount}&cu=INR`;

    setUpiLink(upiIntentUrl);
    setShowPaymentOptions(true);
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
          <h3 className="field-title">Phone Number</h3>
          <PhoneInput
            country={"in"}
            value={phone}
            onChange={(phone) => setPhone(phone)}
            inputStyle={{ width: "90%" }}
          />
        </div>
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
          <h3 className="field-title">Program</h3>
          <select
            className="field-input"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="">Select</option>
            <option value="B.Tech">B.Tech</option>
            <option value="M.Tech">M.Tech</option>
            <option value="BCA">BCA</option>
            <option value="MCA">MCA</option>
            <option value="B.Com">B.com</option>
            <option value="B.Sc">B.sc</option>
            <option value="M.Sc">M.sc</option>
            <option value="BBA">BBA</option>
            <option value="MBA">MBA</option>
          </select>
        </div>
        <div className="field">
          <h3 className="field-title">Specify program</h3>
          <input
            type="text"
            className="field-input"
            value={program}
            onChange={(e) => setProgram(e.target.value)}
          />
        </div>
        <div className="field">
          <h3 className="field-title">Blood Group</h3>
          <input
            type="text"
            className="field-input"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
          />
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
            <h3 className="field-title">Hostel Number</h3>
            <input
              type="text"
              value={hostelNo}
              onChange={(e) => setHostelNo(e.target.value)}
              className="field-input"
            />
          </div>
        )}
        {!showPaymentOptions && (
          <div className="button">
            <button type="button" className="button-input" onClick={handlePaymentClick}>
              Proceed to Payment
            </button>
          </div>
        )}
        {showPaymentOptions && (
          <div className="upi-payment">
            <h3>Scan the QR code to complete the payment</h3>
            <QRCode value={upiLink} />
            <div className="payment-screenshot-upload">
              <h3>Upload Payment Screenshot</h3>
              <input type="file" onChange={handleFileChange} />
              <button onClick={handlePaymentConfirmation} className="button-input">
                Confirm Payment
              </button>
            </div>
          </div>
        )}
        {paymentConfirmed && (
          <div className="payment-confirmation">
            <h3>Payment confirmed. Thank you!</h3>
          </div>
        )}
        {paymentConfirmed && (
          <div className="button">
            <button type="submit" className="button-input">
              Register
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default RegistrationPage;
