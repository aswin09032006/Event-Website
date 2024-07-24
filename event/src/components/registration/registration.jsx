import React, { useState } from "react";
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
  const [hORd, setHorD] = useState("");
  const [hostelID, setHostelID] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !name ||
      !gender ||
      !dob ||
      !email ||
      !phone ||
      !regNo ||
      !course ||
      !hORd ||
      (hORd === "Hosteller" && !hostelID)
    ) {
      alert("Please fill all the fields");
      return;
    }

    const formData = { name, gender, dob, email, phone, regNo, course, hORd, hostelID };

    // Call Razorpay
    var options = {
      key: "rzp_test_qh04kGj3eSvHvz", 
      amount: 10100,
      currency: "INR",
      name: "Razor Pay",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
        console.log("Payment Successful", response);
        console.log("Form Data Submitted: ", formData);
      },
      prefill: {
        name: name,
        email: email,
        contact: phone,
      },
      notes: {
        address: "Your Company Address",
      },
      theme: {
        color: "#3399cc",
      },
    };

    var rzp1 = new window.Razorpay(options);
    rzp1.on('payment.failed', function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();
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
          <button type="submit" className="button-input">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;