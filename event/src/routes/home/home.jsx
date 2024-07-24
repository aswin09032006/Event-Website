import React from 'react';
import { MdArrowOutward } from "react-icons/md";
import lpulogo from '../../assets/lpu.png';
import nsslogo from '../../assets/nss.png';
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
            <a href="/registration">REGISTER NOW <MdArrowOutward/></a>
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
        The National Service Scheme (NSS) at Lovely Professional University, known as LPUNSS, is dedicated to fostering social responsibility and community service among students. Established with the motto "Not Me, Not You, But We," LPUNSS aims to inculcate the spirit of selfless service, leadership, and community engagement in our student volunteers.
        <br /><br />
        At LPUNSS, we believe in the power of collective effort and the importance of giving back to society. Our mission is to develop well-rounded individuals who are not only academically proficient but also socially conscious and responsible citizens. We strive to create opportunities for students to engage in meaningful community service activities that address real-world challenges and contribute to the betterment of society.
        <br /><br />
        Through a variety of initiatives, programs, and projects, LPUNSS provides students with the platform to apply their knowledge and skills in practical settings, fostering personal growth and societal impact. Our activities range from organizing blood donation camps and environmental conservation drives to conducting health awareness campaigns and educational outreach programs. Each endeavor is designed to instill a sense of empathy, civic duty, and a commitment to making a positive difference in the lives of others.
        <br /><br />
        LPUNSS also places a strong emphasis on leadership development. We encourage our volunteers to take on leadership roles, work collaboratively in teams, and develop the skills necessary to lead with integrity and compassion. By participating in NSS activities, students not only enhance their academic and professional competencies but also grow as leaders who are prepared to tackle complex social issues.
        <br /><br />
        Furthermore, LPUNSS is committed to fostering an inclusive and supportive community where every volunteer feels valued and empowered. We celebrate diversity and promote a culture of mutual respect and understanding. Our volunteers come from various backgrounds, bringing unique perspectives and experiences that enrich our collective efforts.
        <br /><br />
        In essence, LPUNSS is more than just a service organization; it is a vibrant community of change-makers who are passionate about making a lasting impact. We invite you to join us in our mission to build a better, more compassionate world. Together, we can create a future where the spirit of "Not Me, Not You, But We" thrives, and every individual has the opportunity to contribute to the common good.
        </p>
    </div>
    <div className="upcoming-events-section">
        <Card title="Run for equality 2" img={rfe} navlink={"/registration"}/>
    </div>
    </div>
);
}

export default Home;
