import React, { useState } from 'react';

import '../Assests/css/Portfolio.css';

import project1 from '../Assests/images/Project 1.png';
import project2 from '../Assests/images/Project 2.png';
import project3 from '../Assests/images/Project 3.png';

import edit1 from '../Assests/images/Edit1.png';
import edit2 from '../Assests/images/Edit2.png';
import edit3 from '../Assests/images/Edit3.png';

import Footer from './Footer';

const Portfolio = () => {

    const [activeTab, setActiveTab] = useState("development");

    const changeTab = (tab) => {
        setActiveTab(tab);
    }

    return (
        <>
            <div className="main-container">

                <div className="navbar">
                    <div className="logo">
                        <a href='#about' data-aos="fade-down"><span>V</span>ivinprabhu</a>
                    </div>

                    <ul className='nav'>
                        <li data-aos="fade-down"><a href="#about"><i className='material-icons'>person</i>About me</a></li>
                        <li data-aos="fade-down"><a href="#skills"><i className='material-icons'>construction</i>Skills</a></li>
                        <li data-aos="fade-down"><a href="#journey"><i className='material-icons'>timeline</i>Journey</a></li>
                        <li data-aos="fade-down"><a href="#projects"><i className='material-icons'>work</i>Projects</a></li>
                    </ul>
                </div>

                {/* Section-1 About me */}

                <div className="section section-1" id='about'>
                    <h1 data-aos="fade-up">Hey <span style={{ fontStyle: 'italic' }}>there,</span></h1>
                    <h1 data-aos="fade-up">I am <span>Vivinprabhu</span></h1>
                    <p data-aos="fade-up">a software developer and I possess the capability to learn new technologies and have the skills to develop responsive and dynamic frontend and secure backend, and integrate them seamlessly. Besides coding, I love photo editing and video editing. I’m open to freelancing. If you are looking for a full stack developer or editor, feel free to reach me! </p>

                    <a data-aos="fade-up" target='blank' href="https://drive.google.com/file/d/1Q4skP-Kc9y2BXUkU4CTb-0SF4IIHk1HW/view?usp=sharing" className='btn-resume'>Resume</a>
                </div>

                {/* Section-2 Skills */}

                <div className="section section-2" id='skills'>
                    <h1 className='section-title' data-aos="fade-right">Skills</h1>
                    <div className="skill-list">
                        <div className="skill-list-container">

                            <div className="skill-list-box-container">
                                <h2 className='skill-box-title' data-aos="zoom-out">Programming Language</h2>
                                <div className="skill-items">
                                    <div className="skill-list-box" data-aos="flip-up">
                                        <i className="devicon-java-plain"></i>
                                        <p>Java</p>
                                    </div>
                                </div>
                            </div>

                            <div className="skill-list-box-container">
                                <h2 className='skill-box-title' data-aos="zoom-out">Web Development</h2>
                                <div className="skill-items">
                                    <div className="skill-list-box" data-aos="zoom-in">
                                        <i className="devicon-react-original"></i>
                                        <p>React JS</p>
                                    </div>
                                    <div className="skill-list-box" data-aos="zoom-in">
                                        <i className="devicon-express-original"></i>
                                        <p>Express JS</p>
                                    </div>
                                    <div className="skill-list-box" data-aos="zoom-in">
                                        <i className="devicon-spring-original"></i>
                                        <p>Spring</p>
                                    </div>
                                    <div className="skill-list-box" data-aos="zoom-in">
                                        <i className="devicon-nodejs-plain"></i>
                                        <p>Node JS</p>
                                    </div>
                                    <div className="skill-list-box" data-aos="zoom-in">
                                        <i className="devicon-html5-plain"></i>
                                        <p>HTML5</p>
                                    </div>
                                    <div className="skill-list-box" data-aos="zoom-in">
                                        <i className="devicon-css3-plain"></i>
                                        <p>CSS3</p>
                                    </div>
                                    <div className="skill-list-box" data-aos="zoom-in">
                                        <i className="devicon-javascript-plain"></i>
                                        <p>JavaScript</p>
                                    </div>
                                </div>
                            </div>

                            <div className="skill-list-box-container">
                                <h2 className='skill-box-title' data-aos="zoom-out">Database</h2>
                                <div className="skill-items">
                                    <div className="skill-list-box" data-aos="zoom-in">
                                        <i className="devicon-mysql-original"></i>
                                        <p>MySQL</p>
                                    </div>
                                    <div className="skill-list-box" data-aos="zoom-in">
                                        <i className="devicon-mongodb-plain"></i>
                                        <p>MongoDB</p>
                                    </div>
                                    <div className="skill-list-box" data-aos="zoom-in">
                                        <p>Google Sheets</p>
                                    </div>
                                </div>
                            </div>

                            <div className="skill-list-box-container">
                                <h2 className='skill-box-title' data-aos="zoom-out">Tools</h2>
                                <div className="skill-items">
                                    <div className="skill-list-box" data-aos="zoom-in">
                                        <i className="devicon-git-plain"></i>
                                        <p>Git</p>
                                    </div>
                                    <div className="skill-list-box" data-aos="zoom-in">
                                        <i className="devicon-github-original"></i>
                                        <p>GitHub</p>
                                    </div>
                                    <div className="skill-list-box" data-aos="zoom-in">
                                        <i className="devicon-vscode-plain"></i>
                                        <p>VS Code</p>
                                    </div>
                                    <div className="skill-list-box" data-aos="zoom-in">
                                        <i className="devicon-postman-plain"></i>
                                        <p>Postman</p>
                                    </div>
                                </div>
                            </div>

                            <div className="skill-list-box-container">
                                <h2 className='skill-box-title' data-aos="zoom-out">Editing</h2>
                                <div className="skill-items">
                                    <div className="skill-list-box" data-aos="zoom-in">
                                        <i className="devicon-photoshop-plain"></i>
                                        <p>Photoshop 2019</p>
                                    </div>
                                    <div className="skill-list-box" data-aos="zoom-in">
                                        <p>DaVinci Resolve</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                {/* Section-3 Journey */}

                <div className="section section-3" id='journey' >
                    <h1 className='section-title' data-aos="fade-left">Journey</h1>

                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="circle-dot"></div>
                            <h3 className="timeline-date" data-aos="fade-left">
                                <span className="material-icons">calendar_month</span> Nov 2021 - Mar 2025
                            </h3>
                            <h4 className='timeline-title' data-aos="fade-left">BE Computer Science and Engineering</h4>
                            <p className='timeline-text' data-aos="fade-left">
                                Completed the Bachelor of Engineering degree in Computer Science and Engineering with the Cumulative Grade Point Average (CGPA) of <span style={{fontWeight: 'bold'}}>8.17/10</span> at a private institution in Coimbatore.
                            </p>
                        </div>
                        <div className="timeline-item">
                            <div className="circle-dot"></div>
                            <h3 className="timeline-date" data-aos="fade-left">
                                <span className="material-icons">calendar_month</span> May 2025 - Present
                            </h3>
                            <h4 className='timeline-title' data-aos="fade-left">Software Developer Trainee at i-exceed technology</h4>
                            <p className='timeline-text' data-aos="fade-left">
                                i-exceed technology solutions is a Fintech company that helps the world’s leading banks and financial institutions deliver stunning user journeys for their customers and staff.
                                <ul>
                                    <li>Independently designed and developed the insurance module for a collaborative Flutter-based banking application UI, ensuring seamless integration with the overall system.</li>
                                </ul>

                                <div className="journey-skills">
                                    <p>Java</p>
                                    <p>Dart</p>
                                    <p>Flutter</p>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>


                {/* Section-4 Projects */}

                <div className="section section-4" id='projects'>
                    <h1 className='section-title' data-aos="fade-right">Projects</h1>
                    <div className="tab-buttons">
                        <button className={activeTab === 'development' ? "active" : ""} onClick={() => changeTab("development")}>
                            Dev
                        </button>
                        <button className={activeTab === 'creative' ? "active" : ""} onClick={() => changeTab("creative")}>
                            Editing
                        </button>
                    </div>

                    <div className="tab-contents">
                        {activeTab === "development" && (
                            <div className="project-overall-container">
                                <div className="project-individual-container" data-aos="fade-up">
                                    <div className="project-details-container">
                                        <img src={project1} alt="project 1" />
                                        <p><span>Description : </span>Merniverse is a learning platform for mern stack.</p>
                                        <p><span>Highlights : </span></p>
                                        <ul>
                                            <li>JWT token-based login system with email verification while signup.</li>
                                            <li>Stored passwords securely in the database with salting encryption.</li>
                                            <li>E-certificates will be generated and emailed automatically.</li>
                                        </ul>
                                        <p><span>Frontend source code : </span><a href="https://github.com/vivinprabhu/Merniverse-Frontend" target='_blank' rel="noreferrer">Click here!</a></p>
                                        <p><span>Backend source code : </span><a href="https://github.com/vivinprabhu/Merniverse-Backend" target='_blank' rel="noreferrer">Click here!</a></p>
                                        <p><span>Live demo : </span><a href="https://merniverse.onrender.com/" target='_blank' rel="noreferrer">Click here!</a></p>

                                        <div className="journey-skills">
                                            <p>MongoDB</p>
                                            <p>ExpressJS</p>
                                            <p>ReactJS</p>
                                            <p>NodeJS</p>
                                            <p>GSheet DB</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-individual-container" data-aos="fade-up">
                                    <div className="project-details-container">
                                        <img src={project2} alt="project 2" />
                                        <p><span>Description : </span>NoteX is a simple application for taking and sharing our notes.</p>
                                        <p><span>Highlights : </span></p>
                                        <ul>
                                            <li>Implemented relational mapping between collections.</li>
                                            <li>Storing JWT in httpOnly cookie ensure to avoid XSS attacks.</li>
                                            <li>Implemented role-based permissions in API calls.</li>
                                        </ul>
                                        <p><span>Frontend source code : </span><a href="https://github.com/vivinprabhu/NoteX-Frontend" target='_blank' rel="noreferrer">Click here!</a></p>
                                        <p><span>Backend source code : </span><a href="https://github.com/vivinprabhu/NoteX-Backend" target='_blank' rel="noreferrer">Click here!</a></p>
                                        <p><span>Live demo : </span><a href="https://notex-amfu.onrender.com/" target='_blank' rel="noreferrer">Click here!</a></p>

                                        <div className="journey-skills">
                                            <p>MongoDB</p>
                                            <p>ExpressJS</p>
                                            <p>ReactJS</p>
                                            <p>NodeJS</p>
                                            <p>AOS-React</p>
                                            <p>Redux</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-individual-container" data-aos="fade-up">
                                    <div className="project-details-container">
                                        <img src={project3} alt="project 3" />
                                        <p><span>Description : </span>AirJio is a mobile recharge application. (Group project)</p>
                                        <p><span>Highlights : </span></p>
                                        <ul>
                                            <li>Responsive across all screens.</li>
                                            <li>RazorPay (test) have been implemented for secure payments.</li>
                                            <li>Freely RazorPay (test) will not be worked while hosting.</li>
                                        </ul>
                                        <p><span>Frontend source code : </span><a href="https://github.com/vivinprabhu/AirJio-Frontend" target='_blank' rel="noreferrer">Click here!</a></p>
                                        <p><span>Live demo : </span><a href="https://vivinprabhu.github.io/AirJio-Frontend/" target='_blank' rel="noreferrer">Click here!</a></p>

                                        <div className="journey-skills">
                                            <p>React Vite</p>
                                            <p>CSS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === "creative" && (
                            <div className="project-overall-container">
                                <div className="project-individual-container" data-aos="fade-up">
                                    <div className="project-details-container">
                                        <img src={edit1} alt="edit 1" />
                                        <div className="journey-skills">
                                            <p>LinkedIn Cover Photo</p>
                                            <p>Resolution 1128px x 191px </p>
                                            <p>Photoshop CC 2019</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-individual-container" data-aos="fade-up">
                                    <div className="project-details-container">
                                        <img src={edit2} alt="edit 2" />
                                        <div className="journey-skills">
                                            <p>Profile Photo</p>
                                            <p>Ratio 1:1</p>
                                            <p>Photoshop CC 2019</p>
                                            <p>Silhouette</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-individual-container" data-aos="fade-up">
                                    <div className="project-details-container">
                                        <img src={edit3} alt="edit 3" />
                                        <div className="journey-skills">
                                            <p>Poster designing</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>

            <Footer />
        </>
    )
}

export default Portfolio