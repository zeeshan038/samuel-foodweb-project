import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 mt-12 py-12">
      <div className="container mx-auto px-6 max-w-screen-lg">

        {/* Footer content arranged in a row */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-center space-y-10 md:space-y-0 md:space-x-8">

          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/" className="relative text-white text-2xl font-bold flex items-center">
              <span className="bg-[#39DB4A] text-white p-1 px-2 rounded-md font-sans mr-2">
                H
              </span>
              exham Thyme
            </Link>
            <p className="font-bold mt-1 ml-16 text-gray-300">Since 2011</p>
            <p className="font-semibold text-[#27b535] text-[16px] mt-2">The Tasty House</p>
               {/* Social Media Section */}
          <div className="flex space-x-6 items-center justify-center mt-3 md:mt-10">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-blue-500">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-blue-400">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-pink-500">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-blue-600">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>

          </div>

          {/* Links Section (Home, About, Contact) */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-semibold text-lg mb-4 text-white">Links</h3>
            <Link to="/" className="text-gray-400 hover:text-blue-400 mb-2">Home</Link>
            <Link to="/about" className="text-gray-400 hover:text-blue-400 mb-2">About Us</Link>
            <Link to="/contact" className="text-gray-400 hover:text-blue-400 mb-2">Contact</Link>
          </div>

          {/* Contact Section (Email & Phone) */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-semibold text-lg mb-4 text-white">Contact</h3>
            <p className="text-gray-400 mb-2">Email: clearbusinessbyadrian@gmail.com</p>
            <p className="text-gray-400">Phone: 0141 611 2870</p>
          </div>

       
        </div>

        {/* Footer Text */}
        <div className="text-center text-sm text-gray-500 mt-12">
          <p>&copy; 2024 Your Brand. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;