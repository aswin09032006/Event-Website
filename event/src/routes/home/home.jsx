import React from 'react';
import { MdArrowOutward } from "react-icons/md";
import lpulogo from '../../assets/lpu.png';
import nsslogo from '../../assets/nss.png';
import placeholder from '../../assets/placeholder.png';
import rfe from '../../assets/runforequality.png';
import Card from '../../components/card/card';
import './home.css';

const Home = () => {
    return (
        <div className="home-page-container">
            <div className="home-page-header">
                <img src={lpulogo} alt="lpu-logo" className="lpu-logo" />
                <div className="center-header">
                    <h1 className="header">
                        RUN FOR EQUALITY 2 - 2024
                    </h1>
                    <p className="register-text">
                        Registration for the Run for Equality 2 - 2024 is open now!
                    </p>
                    <div className="register-button">
                        <a href="/registration">REGISTER NOW <MdArrowOutward /></a>
                    </div>
                </div>
                <img src={nsslogo} alt="nss-logo" className="nss-logo" />
            </div>
            <div className="home-page-sub-header">
                <h1 className="motto">"Not me, Not you, But we"</h1>
            </div>
            <div className="home-page-hero-section">
                {/* Hero section content can go here */}
            </div>
            <div className="home-page-about-section">
                <h1 className="about-section-header">About us</h1>
                <p className="about-section-para">
                    Welcome to the National Service Scheme (NSS) at Lovely Professional University (LPUNSS)!
                </p>
                <h1 className="mission">
                    Our Mission
                </h1>
                <p className="mission-para">
                The National Service Scheme (NSS) at Lovely Professional University, known as LPUNSS, is dedicated to fostering social responsibility and community service among students. Established with the motto "Not Me, Not You, But We" LPUNSS aims to inculcate the spirit of selfless service, leadership, and community engagement in our student volunteers.
                </p>
            </div>
            <div className="events-section">
                <p className="events-title">
                    ~Upcoming Events
                </p>
                <div className="events-card-container">
                    <Card title="Run for equality 2" img={rfe} navlink={"/registration"} />
                </div>
            </div>
            <div className="events-section">
                <p className="events-title">
                    ~Social Events
                </p>
                <div className="events-card-container">
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
        </div>
    );
}

export default Home;
