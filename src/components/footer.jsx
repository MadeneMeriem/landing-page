import React from 'react';
import Logo from '../Assets/Logo.svg';
import {BsTwitter, BsYoutube} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si';





const Footer = () => {
    return ( 
        <div className="footer-wrapper">
            <div className="footer-section-one">
                <div className="footer-logo-container">
                    <img src={Logo} alt="" />
                </div>
                <div className="footer-icons">
                    <BsTwitter/>
                    <SiLinkedin/>
                    <BsYoutube/>
                    <FaFacebookF />
                </div>
            </div>
            <div className="footer-section-two">
                <div className="footer-section-columns">
                    <span>Quality</span>
                    <span>Help</span>
                    <span>Share</span>
                    <span>Carreers</span>
                    <span>Testimonials</span>
                    <span>Work</span>
                </div>
                <div className="footer-section-columns">
                    <span>+21344556677888</span>
                    <span>contact@gmail.com</span>
                    <span>1234 Street Name</span>
                    <span>Tiaret, Tiare, 140003</span>
                    <span>Algeira</span>
                </div>
                <div className="footer-section-columns">
                    <span>Terms&Conditions</span>
                    <span>About us</span>
                    <span>Privacy and Policy</span>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;