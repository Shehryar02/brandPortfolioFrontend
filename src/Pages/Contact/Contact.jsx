import React, { useState, useEffect } from 'react';
import './Contact.css';
import { useLocation, useNavigate } from "react-router-dom";

import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const selectedPlan = queryParams.get("plan");

  const [message, setMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("Ask About a Service");
  const [errors, setErrors] = useState({});
  const [thankYou, setThankYou] = useState(false);

  useEffect(() => {
    if (selectedPlan) {
      setMessage(`I am interested in the ${selectedPlan}. Please provide more information.`);
      const messageElement = document.getElementById("contact-message");
      if (messageElement) {
        messageElement.scrollIntoView({ behavior: "smooth", block: "center" });
        messageElement.focus();
      }
    }
  }, [selectedPlan]);

  const settingCheck = (subject) => {
    setSelectedSubject(subject);
  };

  const [loading, setLoading] = useState(false);


  const toHome = () => {
    navigate("/")
  }

  const subjects = ["Ask About a Service", "Get a Price Quote", "Support", "Other Question"];

const handleSubmit = async (e) => {
  e.preventDefault();
  const newErrors = {};
  if (!firstName.trim()) newErrors.firstName = "First name is required";
  if (!lastName.trim()) newErrors.lastName = "Last name is required";
  if (!email.trim()) newErrors.email = "Email is required";
  if (!message.trim()) newErrors.message = "Message is required";

  setErrors(newErrors);
  if (Object.keys(newErrors).length > 0) return;

  const formData = {
    first_name: firstName,
    last_name: lastName,
    email,
    phone,
    subject: selectedSubject,
    message,
  };

  setLoading(true); // Start loader
  try {
    const response = await fetch("https://brandportfoliobackend.onrender.com/api/contact/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setThankYou(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setFirstName(""); setLastName(""); setEmail("");
      setPhone(""); setMessage(""); setSelectedSubject("General Inquiry");
      setErrors({});
    } else {
      alert("Failed to send message.");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Something went wrong.");
  } finally {
    setLoading(false); // Stop loader
  }
};


  if (thankYou) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: 'white' }}>

                          <Helmet>
                      <title>Senvotex | Contact</title>
                    </Helmet>

        <h1 className="text-center headingAfterContact">Thanks for reaching out. We'll be in touch soon.</h1>
        <button className='clickMeBtnAfterContact p-3 mt-3' onClick={toHome}>Back to home</button>
      </div>
    );
  }

  return (
    <div>

                        <Helmet>
                    <title>Senvotex | Contact</title>
                  </Helmet>

      <div className="container-fluid contactMainContainer-lightMode mt-md-3 mt-3 mb-5">
        <div className="container px-4 px-sm-5 px-md-0">

          {/* Heading */}
          <div className='aboveContactForm d-flex flex-column justify-content-center align-items-center mb-md-5 mb-4'>
            <h1>Contact Us</h1>
            <h2 className='text-center'>Any question or remarks? Just write us a message</h2>
          </div>

          {/* Main Row */}
          <div className="row justify-content-between">

            {/* Left Half */}
            <div className="col-md-5 col-12 contact-leftHalf-lightMode px-lg-5 px-md-4">
              <div className='mt-md-5 mt-4 text-md-start text-center contactInfoTopHeading-lightMode'>
                <h2>Contact Information</h2>
                <h3>Say something to start a live chat!</h3>
              </div>

              <div className='mt-md-5 pt-md-5 mt-sm-5 mt-4 text-md-start text-center contactInfoMiddle-lightMode'>
                <h3><i className="me-md-3 fa-solid fa-phone-volume" style={{ color: '#ffffff' }}></i> +92 325 1796359</h3>
                <h3 className='mt-md-5 mt-4'><i className="me-md-3 fa-solid fa-envelope" style={{ color: '#ffffff' }}></i> digital@senvotex.com</h3>
                <h3 className='mt-md-5 mt-4'><i className="me-md-3 fa-solid fa-location-dot" style={{ color: '#ffffff' }}></i> Karachi, Pakistan</h3>
              </div>

              <div className='mt-md-5 pt-md-5 mt-5 mb-md-5 mb-4'>
                <h4 className='text-md-start text-center' style={{ color: 'gray' }}>Connect With Us</h4>
                <div className='mt-3 d-flex gap-3 contactInfoLower-lightMode justify-content-md-start justify-content-center'>
                 <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/senvotex.digital"><div className='d-flex align-items-center justify-content-center'><i className="fa-brands fa-instagram " style={{ color: '#000000' }}></i></div></a>
                 <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/senvotex.digital"><div className='d-flex align-items-center justify-content-center'><i className="fa-brands fa-facebook-f " style={{ color: '#000000' }}></i></div></a>
                 <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/company/senvotexdigital"><div className='d-flex align-items-center justify-content-center'><i className="fa-brands fa-linkedin-in " style={{ color: '#000000' }}></i></div></a>
                 <a target="_blank" rel="noopener noreferrer" href="https://wa.me/923251796359"> <div className='d-flex align-items-center justify-content-center'><i className="fa-brands fa-whatsapp " style={{ color: '#000000' }}></i></div></a>
                </div>
              </div>
            </div>

            {/* Right Half */}
            <div className="col-md-6 col-12 mt-md-0 mt-4 contact-rightHalf-lightMode">
              <form className="d-flex flex-column mt-md-5 mt-4" onSubmit={handleSubmit}>

                {/* First & Last Name */}
                <div className='d-flex justify-content-between'>
                  <div className='contactInputContainingDiv'>
                    <h6>First Name <span style={{ color: 'red' }}>*</span></h6>
                    <input
                    className='contactInput'
                      type="text"
                      name='text'
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      style={{ borderColor: errors.firstName ? 'red' : '#ccc' }}
                    />
                    {errors.firstName && <p style={{ color: 'red', fontSize: '0.9rem' }}>{errors.firstName}</p>}
                  </div>
                  <div className='contactInputContainingDiv'>
                    <h6>Last Name <span style={{ color: 'red' }}>*</span></h6>
                    <input
                    className='contactInput'
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      style={{ borderColor: errors.lastName ? 'red' : '#ccc' }}
                    />
                    {errors.lastName && <p style={{ color: 'red', fontSize: '0.9rem' }}>{errors.lastName}</p>}
                  </div>
                </div>

                {/* Email and Phone */}
                <div className='d-flex justify-content-between mt-5'>
                  <div className='contactInputContainingDiv'>
                    <h6>Email <span style={{ color: 'red' }}>*</span></h6>
                    <input
                    className='contactInput'
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ borderColor: errors.email ? 'red' : '#ccc' }}
                      autoComplete="email"
                    />
                    {errors.email && <p style={{ color: 'red', fontSize: '0.9rem' }}>{errors.email}</p>}
                  </div>
                  <div className='contactInputContainingDiv'>
                    <h6>Phone Number <span style={{ color: 'gray', fontWeight: '200' }}>(optional)</span></h6>
                    <input
                    className='contactInput'
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className='mt-5'>
                  <h4>Select Subject?</h4>
                  <div className='d-flex gap-4 flex-wrap mt-3'>
                    {subjects.map((subject, index) => (
                      <div key={index} className="d-flex justify-content-center align-items-center">
                        <div
                          className={`contactSelectSubjectIconDiv-${selectedSubject === subject ? 'Check' : 'Uncheck'}-lightMode`}
                          onClick={() => settingCheck(subject)}
                          style={{ cursor: "pointer" }}
                        >
                          {selectedSubject === subject && (
                            <i className="fa-solid fa-check" style={{ color: '#ffffff' }}></i>
                          )}
                        </div>
                        <h6
                          className='m-0 ps-2 contactSelectSubjectSelect-lightMode'
                          style={{ cursor: "pointer" }}
                          onClick={() => settingCheck(subject)}
                        >
                          {subject}
                        </h6>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="mt-5">
                  <h6>Message <span style={{ color: 'red' }}>*</span></h6>
                  <textarea
                    id="contact-message"
                    rows="5"
                    name='text'
                    className="w-100 p-2 textAreaContact"
                    placeholder="Write your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{ borderColor: errors.message ? 'red' : '#ccc' }}
                  />
                  {errors.message && <p style={{ color: 'red', fontSize: '0.9rem' }}>{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <div className="mt-5 d-flex justify-content-end sendMessageButton-lightMode">
                  <button className='px-5 py-2 d-flex align-items-center justify-content-center' type="submit" disabled={loading}>
  {loading ? (
    <span className="spinner"></span>
  ) : (
    "Send Message"
  )}
</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Contact;
