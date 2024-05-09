import React from 'react';

import '../Assests/css/Portfolio.css';
import '../Assests/css/color-1.css';

import profilePhoto from '../Assests/images/profile photo.png';

import project1 from '../Assests/images/Project 1.png';
import project2 from '../Assests/images/Project 2.png';
import project3 from '../Assests/images/Project 3.png';

const Portfolio = () => {

    return (
        <div>
            <div className="main-container">
                <div className="aside">
                    <div className="logo">
                        <a href='#about'><span>V</span>ivinprabhu</a>
                    </div>

                    <ul className='nav'>
                        <li><a href="#about"><i className='material-icons'>person</i>About me</a></li>
                        <li><a href="#skills"><i className='material-icons'>construction</i>Skills</a></li>
                        <li><a href="#portfolio"><i className='material-icons'>work</i>Projects</a></li>
                        <li><a href="#contact"><i className='material-icons'>question_answer</i>Contact</a></li>
                    </ul>
                </div>

                <div className="main-content">
                    <section id='about' className="about section">
                        <div className="container">
                            <div className="row">
                                <div className="about-info padd-15" data-aos="zoom-in-right">
                                    <h3 className="hello">Hey<span className='name'> there,</span></h3>
                                    <h3 className="my-profession">I'm a <span className='typing'>Vivinprabhu</span></h3>
                                    <p>a full-stack developer, currently pursuing my Bachelor of Computer Science and Engineering. I possess the capability to learn new technologies and have the skills to develop responsive frontend and secure backend, and integrate them seamlessly.</p>
                                    <a target='blank' href="https://drive.google.com/file/d/1EbfOpCXmVGVLpt5qmXlyVDodX77-Avln/view?usp=drive_link" className='btn hire-me'>Resume</a>

                                    <div className="social">
                                        <a href='https://www.linkedin.com/in/vivinprabhu/' target="_blank" rel="noopener noreferrer"><i className='fab fa-linkedin'></i></a>
                                        <a href='https://github.com/vivinprabhu' target="_blank" rel="noopener noreferrer"><i className='fab fa-github-square'></i></a>
                                    </div>
                                </div>
                                <div className="about-img" data-aos="zoom-in-left">
                                    <img src={profilePhoto} alt="profilePhoto" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id='skills' className="skills section">
                        <div className="container">
                            <div className="row">
                                <div className="section-title">
                                    <h2>Skills</h2>
                                </div>
                            </div>

                            <div className="skills-content">
                                <div className="row">
                                    <div className="education" data-aos="zoom-in">
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
                                                            Studied at Literacy Mission Matriculation Higher Secondary School,Tiruppur
                                                        </p>
                                                    </div>
                                                    <div className="timeline-item">
                                                        <div className="circle-dot"></div>
                                                        <h3 className="timeline-date">
                                                            <i className='fa fa-calendar'></i> 2020 - 2021
                                                        </h3>
                                                        <h4 className='timeline-title'>HSC (Computer Science)</h4>
                                                        <p className='timeline-text'>
                                                            Studied at Literacy Mission Matriculation Higher Secondary School,Tiruppur
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

                                    <div className="skill-list" data-aos="zoom-in">
                                        <div className="skill-list-container">
                                            <h3 className="title">Skills</h3>
                                            <div className="skill-list-box-container">
                                                <div className="skill-list-box" data-aos="zoom-in">
                                                    <i class="devicon-react-original"></i>
                                                    <p>React JS</p>
                                                </div>
                                                <div className="skill-list-box" data-aos="zoom-in">
                                                    <i class="devicon-express-original"></i>
                                                    <p>Express JS</p>
                                                </div>
                                                <div className="skill-list-box" data-aos="zoom-in">
                                                    <i class="devicon-nodejs-plain"></i>
                                                    <p>Node JS</p>
                                                </div>
                                                <div className="skill-list-box" data-aos="zoom-in">
                                                    <i class="devicon-mongodb-plain"></i>
                                                    <p>MongoDB</p>
                                                </div>
                                                <div className="skill-list-box" data-aos="zoom-in">
                                                    <i class="devicon-mysql-original"></i>
                                                    <p>MySQL</p>
                                                </div>
                                                <div className="skill-list-box" data-aos="zoom-in">
                                                    <i class="devicon-java-plain"></i>
                                                    <p>Java</p>
                                                </div>
                                                <div className="skill-list-box" data-aos="zoom-in">
                                                    <i class="devicon-html5-plain"></i>
                                                    <p>HTML</p>
                                                </div>
                                                <div className="skill-list-box" data-aos="zoom-in">
                                                    <i class="devicon-css3-plain"></i>
                                                    <p>CSS</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id='portfolio' className="portfolio section">
                        <div className="container">
                            <div className="row">
                                <div className="section-title padd-15">
                                    <h2>Projects</h2>
                                </div>
                            </div>
                            <div className="portfolio-heading padd-15">
                                <div className="row">
                                    <div className="portfolio-item padd-15" data-aos="zoom-in">
                                        <div className="portfolio-item-inner shadow-dark">
                                            <div className="portfolio-img">
                                                <img src={project1} alt='project1' />
                                            </div>
                                        </div>
                                        <p className='portfolio-item-p'><span>Description : </span>Developed to generate a strong password.<br></br></p>
                                        <p className='portfolio-item-p'><span>Tech stack : </span>ReactJS, Tostify library, CSS<br></br></p>
                                        <ul>
                                            <p><span>Highlights : </span></p>
                                            <li>Responsive across all screens.</li>
                                            <li>Implemented React tostify for giving alert wheather the password is copied or not.</li>
                                            <li>User can select the range of the password from 8-42.</li>
                                        </ul> <br></br>
                                        <p> <span>Source code:</span> <a href='https://github.com/vivinprabhu/Password-Generator-ReactJS' target="_blank" rel="noopener noreferrer">Click here!</a> <br></br> <span>Live Demo:</span> <a href='https://vivinprabhu.github.io/Password-Generator-ReactJS/' target="_blank" rel="noopener noreferrer">Click here!</a></p>
                                    </div>

                                    <div className="portfolio-item padd-15" data-aos="zoom-in">
                                        <div className="portfolio-item-inner shadow-dark">
                                            <div className="portfolio-img">
                                                <img src={project2} alt='project2' />
                                            </div>
                                        </div>
                                        <p className='portfolio-item-p'><span>Description : </span>NoteX is a simple application for taking and sharing our notes.<br></br></p>
                                        <p className='portfolio-item-p'><span>Tech stack : </span>MongoDB, ExpressJS, ReactJS, NodeJS, GSheet DB<br></br></p>
                                        <ul>
                                            <p><span>Highlights : </span></p>
                                            <li>JWT token-based login system with email verification while signup.</li>
                                            <li>Stored passwords securely in the database with salting encryption.</li>
                                            <li>E-certificates will be generated and emailed automatically.</li>
                                        </ul> <br></br>
                                        <p> <span>Frontend source code:</span> <a href='https://github.com/vivinprabhu/Merniverse-Frontend' target="_blank" rel="noopener noreferrer">Click here!</a> <br></br> <span>Backend source code:</span> <a href='https://github.com/vivinprabhu/Merniverse-Backend' target="_blank" rel="noopener noreferrer">Click here!</a> <br></br> <span>Live Demo:</span> <a href='https://merniverse.onrender.com/' target="_blank" rel="noopener noreferrer">Click here!</a></p>
                                    </div>

                                    <div className="portfolio-item padd-15" data-aos="zoom-in">
                                        <div className="portfolio-item-inner shadow-dark">
                                            <div className="portfolio-img">
                                                <img src={project3} alt='project3' />
                                            </div>
                                        </div>
                                        <p className='portfolio-item-p'><span>Description : </span>NoteX is a simple application for taking and sharing our notes.<br></br></p>
                                        <p className='portfolio-item-p'><span>Tech stack : </span>MongoDB, ExpressJS, ReactJS, NodeJS, AOS-React library, Redux<br></br></p>
                                        <ul>
                                            <p><span>Highlights : </span></p>
                                            <li>Implemented relational mapping between collections.</li>
                                            <li>Storing JWT in httpOnly cookie ensure to avoild XSS attacks.</li>
                                            <li>Implemented role-based permissions in API-calls.</li>
                                        </ul> <br></br>
                                        <p> <span>Frontend source code:</span> <a href='https://github.com/vivinprabhu/NoteX-Frontend' target="_blank" rel="noopener noreferrer">Click here!</a> <br></br> <span>Backend source code:</span> <a href='https://github.com/vivinprabhu/NoteX-Backend' target="_blank" rel="noopener noreferrer">Click here!</a> <br></br> <span>Live Demo:</span> <a href='https://notex-amfu.onrender.com/' target="_blank" rel="noopener noreferrer">Click here!</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id='contact' className='contact section' data-aos="fade-up">
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