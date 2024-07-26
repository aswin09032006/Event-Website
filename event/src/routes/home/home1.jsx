import React from 'react';
import placeholder from '../../assets/placeholder.png';
import rfe from '../../assets/runforequality.png';
import bg from '../../assets/Untitled (1).png';
import Card from '../../components/card/card';
import './home1.css';

const Home = () => {
    return (
        <div className="home-page1-container">
            <div className="home-page1-hero-section">
                <img src={bg} alt="" className="home-page1-hero-image" />
            </div>
            {/* <div className="home-page1-header">
                <img src={lpulogo} alt="lpu-logo" className="lpu-logo1" />
                <div className="center-header1">
                    <h1 className="header1">
                        RUN FOR EQUALITY 2 - 2024
                    </h1>
                    <p className="register-text1">
                        Registration for the Run for Equality 2 - 2024 is open now!
                    </p>
                    <div className="register-button1">
                        <a href="/registration">REGISTER NOW <MdArrowOutward /></a>
                    </div>
                </div>
                <img src={nsslogo} alt="nss-logo" className="nss-logo1" />
            </div> */}
            <div className="register-now">
                <p className="register-content">
                    <span style={{color:"gray",fontSize:"35px"}}>"</span>  Registration for the Run for Equality 2 - 2024 is open now! <a href="/registration" style={{color:"#ff4500",textDecoration:"none"}}>Click here to register</a> <span style={{color:"gray",fontSize:"35px"}}>"</span>
                </p>
            </div>
            <div className="home-page1-sub-header">
                <h1 className="motto1"><span style={{color:"#ff4500"}}>Our Motto </span><span style={{color:"gray",fontSize:"30px"}}> "</span>Not me, Not you, But we<span style={{color:"gray",fontSize:"30px"}}>"</span></h1>
            </div>
            <div className="home-page1-about-section">
                <div className="home-page1-about-contents">
                <h1 className="about-section-header1">About us</h1>
                <p className="about-section-para1">
                    Welcome to the National Service Scheme (NSS) at Lovely Professional University (LPUNSS)!
                </p>
                </div>
                <div className="home-page1-mission-contents">
                <h1 className="mission1">
                    Our Mission
                </h1>
                <p className="mission-para1">
                The National Service Scheme (NSS) at Lovely Professional University, known as LPUNSS, is dedicated to fostering social responsibility and community service among students. Established with the motto "Not Me, Not You, But We" LPUNSS aims to inculcate the spirit of selfless service, leadership, and community engagement in our student volunteers.
                </p>
                </div>
            </div>
            <div className="events-section1">
                <p className="events-title1">
                    ~Upcoming Events
                </p>
                <div className="events-card-container1">
                    <Card title="Run for equality 2" img={rfe} navlink={"/registration"} />
                </div>
            </div>
            <div className="events-section1">
                <p className="events-title1">
                    ~Social Events
                </p>
                <div className="events-card-container1">
                    <Card title="Plantation Drive" img={placeholder} navlink={"/"} />
                    <Card title="Physiotherapy" img={placeholder} navlink={"/"} />
                    <Card title="Feeding Bellies" img={placeholder} navlink={"/"} />
                    <Card title="Nari: Her Right Her Prides" img={placeholder} navlink={"/"} />
                    <Card title="Joy of giving" img={placeholder} navlink={"/"} />
                    <Card title="Cancer Awareness" img={placeholder} navlink={"/"} />
                    <Card title="Voter Awareness" img={placeholder} navlink={"/"} />
                    <Card title="Samarpan" img={placeholder} navlink={"/"} />
                </div>
            </div>
            <div className="events-section1">
                <p className="events-title1">
                    ~Fundraising Events
                </p>
                <div className="events-card-container1">
                    <Card title="Rivals on the pitch" img={placeholder} navlink={"/registration"} />
                </div>
            </div>
        </div>
    );
}

export default Home;
