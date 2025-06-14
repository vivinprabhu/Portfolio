import React from 'react'
import '../Assests/css/Portfolio.css';

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className="footer-text">
          <p>Connect with me through</p>
        </div>

        <div className="social-media-div">

          <a className="social-media" href='https://www.linkedin.com/in/vivinprabhu/' target='_blank' rel='noopener noreferrer'>
            <i class="devicon-linkedin-plain"></i>
            <p>LinkedIn</p>
          </a>

          <a className="social-media" href='https://www.github.com/vivinprabhu/' target='_blank' rel='noopener noreferrer'>
            <i class="devicon-github-original"></i>
            <p>Github</p>
          </a>

          <a className="social-media" href='mailto:cseskct255vivinprabhu.s@gmail.com' target='_blank' rel='noopener noreferrer'>
            <span className="material-icons">mail</span>
            <p>Gmail</p>
          </a>
        </div>
      </footer>
    </>
  )
}

export default Footer
