import React, { useState } from 'react';

import '../Assests/css/Portfolio.css';
import '../Assests/css/color-1.css';

import profilePhoto from '../Assests/images/profile photo.png';

import project1 from '../Assests/images/Project 1.png';
import project2 from '../Assests/images/Project 2.png';
import project3 from '../Assests/images/Project 3.png';


const Portfolio = () => {

    const [activeSection, setActiveSection] = useState('home');

    const handleSectionClick = (sectionId) => {
        setActiveSection(sectionId);
    };

    return (
        <div>
            <div className="main-container">
                <div className="aside">
                    <div className="logo">
                        <a href='#about'><span>V</span>ivinprabhu</a>
                    </div>

                    <ul className='nav'>
                        <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => handleSectionClick('home')}><i className="fa fa-home"></i>Home</a></li>
                        <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => handleSectionClick('about')}><i className="fa fa-user"></i>About</a></li>
                        <li><a href="#services" className={activeSection === 'services' ? 'active' : ''} onClick={() => handleSectionClick('services')}><i className="fa fa-list"></i>Services</a></li>
                        <li><a href="#portfolio" className={activeSection === 'portfolio' ? 'active' : ''} onClick={() => handleSectionClick('portfolio')}><i className="fa fa-briefcase"></i>Portfolio</a></li>
                        <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => handleSectionClick('contact')}><i className="fa fa-comments"></i>Contact</a></li>
                    </ul>
                </div>

                <div className="main-content">
                    <section id='home' className="home section">
                        <div className="container">
                            <div className="row">
                                <div className="home-info padd-15">
                                    <h3 className="hello">Hey<span className='name'> there,</span></h3>
                                    <h3 className="my-profession">I'm a <span className='typing'>Web Developer</span> and a</h3>
                                    <p>Pre-final year Computer Science Engineering student, dedicated on continuous learning and improving my skills in web development, focusing on creating user-friendly responsive designs.</p>
                                    <a href="https://drive.google.com/uc?export=download&id=1XPpF_imGPEQp1DRXj8chfZmR1M2dL95m" className='btn hire-me'>Download CV</a>

                                    <div className="social">
                                        <a href='https://www.linkedin.com/in/vivinprabhu/' target="_blank" rel="noopener noreferrer"><i className='fab fa-linkedin'></i></a>
                                        <a href='https://github.com/vivinprabhu' target="_blank" rel="noopener noreferrer"><i className='fab fa-github-square'></i></a>
                                    </div>
                                </div>
                                <div className="home-img">
                                    <img src={profilePhoto} alt="profilePhoto" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id='about' className="about section">
                        <div className="container">
                            <div className="row">
                                <div className="section-title padd-15">
                                    <h2>About Me</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="about-content">
                                    <div className="row">
                                        <div className="about-text padd-15">
                                            <h3>Hey! I am <span>Vivinprabhu</span></h3>
                                            <p>currently studying Bachelor of Engineering degree in Computer Science at Sri Krishna College of Technology.</p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="personal-info padd-15">
                                            <div className="row">

                                                <div className="info-item padd-15">
                                                    <p>Birthday: <span>14 July 2004</span></p>
                                                </div>
                                                <div className="info-item padd-15">
                                                    <p>Gender: <span>Male</span></p>
                                                </div>
                                                <div className="info-item padd-15">
                                                    <p>Communication: <span>Tamil and English</span></p>
                                                </div>
                                                <div className="info-item padd-15">
                                                    <p>Degree: <span>Pre-Final year student</span></p>
                                                </div>
                                                <div className="info-item padd-15">
                                                    <p>Location: <span>Coimbatore</span></p>
                                                </div>
                                                <div className="info-item padd-15">
                                                    <p>Experience: <span>Fresher</span></p>
                                                </div>
                                                <div className="info-item padd-15">
                                                    <p>Email: <span>cseskct255vivinprabhu.s@gmail.com</span></p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="buttons padd-15">
                                                    <a href='#contact' className='btn hire-me'>Wanna to know more? Click here!</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="skills">
                                            <div className="row">
                                                <div className="skill-item padd-15">
                                                    <h5>HTML & CSS</h5>
                                                    <div className="progress">
                                                        <div className="progress-in" style={{ width: "90%" }}></div>
                                                        <div className="skill-percent">90%</div>
                                                    </div>
                                                </div>
                                                <div className="skill-item padd-15">
                                                    <h5>MongoDB</h5>
                                                    <div className="progress">
                                                        <div className="progress-in" style={{ width: "80%" }}></div>
                                                        <div className="skill-percent">80%</div>
                                                    </div>
                                                </div>
                                                <div className="skill-item padd-15">
                                                    <h5>Express JS</h5>
                                                    <div className="progress">
                                                        <div className="progress-in" style={{ width: "80%" }}></div>
                                                        <div className="skill-percent">80%</div>
                                                    </div>
                                                </div>
                                                <div className="skill-item padd-15">
                                                    <h5>React JS</h5>
                                                    <div className="progress">
                                                        <div className="progress-in" style={{ width: "85%" }}></div>
                                                        <div className="skill-percent">85%</div>
                                                    </div>
                                                </div>
                                                <div className="skill-item padd-15">
                                                    <h5>Java</h5>
                                                    <div className="progress">
                                                        <div className="progress-in" style={{ width: "80%" }}></div>
                                                        <div className="skill-percent">80%</div>
                                                    </div>
                                                </div>
                                                <div className="skill-item padd-15">
                                                    <h5>MySQL</h5>
                                                    <div className="progress">
                                                        <div className="progress-in" style={{ width: "75%" }}></div>
                                                        <div className="skill-percent">75%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="education padd-15">
                                            <h3 className="title">Education</h3>
                                            <div className="row">
                                                <div className="timeline-box padd-15">
                                                    <div className="timeline shadow-dark">
                                                        <div className="timeline-item">
                                                            <div className="circle-dot"></div>
                                                            <h3 className="timeline-date">
                                                                <i className='fa fa-calendar'></i> 2018 - 2019
                                                            </h3>
                                                            <h4 className='timeline-title'>SSC</h4>
                                                            <p className='timeline-text'>
                                                                Studied at Literacy Mission Matriculation Higher Secondary School,Tiruppur and scored 80.2%
                                                            </p>
                                                        </div>
                                                        <div className="timeline-item">
                                                            <div className="circle-dot"></div>
                                                            <h3 className="timeline-date">
                                                                <i className='fa fa-calendar'></i> 2020 - 2021
                                                            </h3>
                                                            <h4 className='timeline-title'>HSC (Computer Science)</h4>
                                                            <p className='timeline-text'>
                                                                Studied at Literacy Mission Matriculation Higher Secondary School,Tiruppur and scored 88.4%
                                                            </p>
                                                        </div>
                                                        <div className="timeline-item">
                                                            <div className="circle-dot"></div>
                                                            <h3 className="timeline-date">
                                                                <i className='fa fa-calendar'></i> 2021 - Present
                                                            </h3>
                                                            <h4 className='timeline-title'>BE Computer Science and Engineering</h4>
                                                            <p className='timeline-text'>
                                                                Studying at Sri Krishna College of Technology and my current CGPA is 7.96
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id='services' className="service section">
                        <div className="container">
                            <div className="row">
                                <div className="section-title padd-15">
                                    <h2>Services</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="service-item padd-15">
                                    <div className="service-item-inner">
                                        <div className="icon">
                                            <i className='fa fa-laptop-code'></i>
                                        </div>
                                        <h4>UI/UX Design</h4>
                                        <p>I specialize in developing user interfaces with a focus on user-friendly design, making it easy to use, providing value to the user and  enhancing the overall user experience.</p>
                                    </div>
                                </div>
                                <div className="service-item padd-15">
                                    <div className="service-item-inner">
                                        <div className="icon">
                                            <i className='fa fa-code'></i>
                                        </div>
                                        <h4>Fullstack Development</h4>
                                        <p>Seasoned specialized in MongoDb, ExpressJS, React and NodeJS, skillfully creating  dynamic, responsive interfaces & robust server-side solutions for seamless web applications.</p>
                                    </div>
                                </div>
                                <div className="service-item padd-15">
                                    <div className="service-item-inner">
                                        <div className="icon">
                                            <i className='fab fa-git'></i>
                                        </div>
                                        <h4>Version Controller</h4>
                                        <p>I provide decent-level proficiency in version control systems such as Git, ensuring seamless collaboration and efficient code management for your projects.</p>
                                    </div>
                                </div>
                                <div className="service-item padd-15">
                                    <div className="service-item-inner">
                                        <div className="icon">
                                            <i className='fa fa-palette'></i>
                                        </div>
                                        <h4>Adobe Photoshop</h4>
                                        <p>Additionally, competent in Adobe Photoshop at an intermediate level, demonstrating a solid foundation in design and image editing. Have ability to edit what the user needs as assests.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id='portfolio' className="portfolio section">
                        <div className="container">
                            <div className="row">
                                <div className="section-title padd-15">
                                    <h2>Portfolio</h2>
                                </div>
                            </div>
                            <div className="portfolio-heading padd-15">
                                <h2>My Projects</h2>
                                <div className="row">
                                    <div className="portfolio-item padd-15">
                                        <div className="portfolio-item-inner shadow-dark">
                                            <div className="portfolio-img">
                                                <img src={project1} alt='project1' />
                                            </div>
                                        </div>
                                        <p className='portfolio-item-p'><span>Description : </span>It was my first Frontend team project (in 2022). It is designed for sharing our notes and materials commonly to others. It was developed using ReactJS. In this team project I learnt about the team co-ordination, project planning, project management and time management.<br></br><br></br></p>
                                        <p><span>Source code:</span> <a href='https://github.com/vivinprabhu/V-XPLORE-FRONTEND' target="_blank" rel="noopener noreferrer">Click here!</a> <br></br> <span>Live Demo:</span> <a href='https://vxplore.netlify.app/' target="_blank" rel="noopener noreferrer">Click here!</a></p>
                                    </div>
                                    <div className="portfolio-item padd-15">
                                        <div className="portfolio-item-inner shadow-dark">
                                            <div className="portfolio-img">
                                                <img src={project2} alt='project2' />
                                            </div>
                                        </div>
                                        <p className='portfolio-item-p'><span>Description : </span>It is created for generate a random strong password (combination of caps,lowercase,numbers and special characters) copy and use it. It was developed using ReactJS. It is developed using ReactJs. Tostify library is included inorder to give a pop-up wheather the user copied the password already or not.<br></br><br></br></p>
                                        <p><span>Source code:</span> <a href='https://github.com/vivinprabhu/Password-Generator-ReactJS' target="_blank" rel="noopener noreferrer">Click here!</a> <br></br> <span>Live Demo:</span> <a href='https://vivinprabhu.github.io/Password-Generator-ReactJS/' target="_blank" rel="noopener noreferrer">Click here!</a></p>
                                    </div>
                                    <div className="portfolio-item padd-15">
                                        <div className="portfolio-item-inner shadow-dark">
                                            <div className="portfolio-img">
                                                <img src={project3} alt='project2' />
                                            </div>
                                        </div>
                                        <p className='portfolio-item-p'><span>Description : </span>Merniverse is an educational platform for learning MERN stack web development. This project is developed using ReactJS, ExpressJS, MongoDB and GSheet DB. You can learn and attend test, an e-certificate will be automatically mailed to you. Secure login with jwt token also an verification link will be sent while regestering the account.<br></br><br></br></p>
                                        <p> <span>Frontend source code:</span> <a href='https://github.com/vivinprabhu/Merniverse-Frontend' target="_blank" rel="noopener noreferrer">Click here!</a> <br></br> <span>Backend source code:</span> <a href='https://github.com/vivinprabhu/Merniverse-Backend' target="_blank" rel="noopener noreferrer">Click here!</a> <br></br> <span>Live Demo:</span> <a href='https://merniverse.onrender.com/' target="_blank" rel="noopener noreferrer">Click here!</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id='contact' className='contact section'>
                        <div className="container">
                            <div className="row">
                                <div className="section-title padd-15">
                                    <h2>Contact Me</h2>
                                </div>
                            </div>
                            <h3 className="contact-title padd-15">Talk to me?</h3>
                            <h4 className="contact-sub-title padd-15"> Get in touch </h4>
                            <div className="row">
                                <div className="contact-info-item padd-15">
                                    <div className="icon"><i className='fab fa-linkedin'></i></div>
                                    <h4>LinkedIn</h4>
                                    <p>linkedin.com/in/vivinprabhu</p>
                                </div>
                                <div className="contact-info-item padd-15">
                                    <div className="icon"><i className='fa fa-map-marker-alt'></i></div>
                                    <h4>Location</h4>
                                    <p>Coimbatore,India</p>
                                </div>
                                <div className="contact-info-item padd-15">
                                    <div className="icon"><i className='fa fa-envelope'></i></div>
                                    <h4>Mail</h4>
                                    <p>cseskct255vivinprabhu.s@gmail.com</p>
                                </div>
                                <div className="contact-info-item padd-15">
                                    <div className="icon"><i className='fa fa-globe-europe'></i></div>
                                    <h4>Domain</h4>
                                    <p>vivinprabhu.github.io/Portfolio</p>
                                </div>
                            </div>
                            <h3 className="contact-title padd-15">Send me an email</h3>
                            <h4 className="contact-sub-title padd-15">I will respond you as soon as possible</h4>
                            <div className="ping-me-button">
                                <a href="mailto:cseskct255vivinprabhu.s@gmail.com" className='btn ping-me'>CLICK HERE TO MAIL ME</a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Portfolio