import React from 'react';
import './Footer.scss';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer__heading">CONNECT WITH ME</div>
        <div className="footer__social__icons">
            <a href="https://github.com/beincharacter" target="_blank"><FaGithub size={30} />
                <span>Github</span>
            </a>
            <a href="www.linkedin.com/in/pal-shubham" target="_blank"><FaLinkedin size={30} />
                <span>LinkediIn</span>
            </a>
            <a href="https://twitter.com/beincharacter" target="_blank"><FaTwitter size={30} />
                <span>Twitter</span>
            </a>
            <a href="#" target="_blank"><FaInstagram size={30} />
                <span>Instagram</span>
            </a>
      </div>

    </div>
  )
}

export default Footer