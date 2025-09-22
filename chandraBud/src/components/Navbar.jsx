import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from '../assets/chandrabud-logo-removebg.png'
import '../styles/navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleLanguage = () => setLanguageOpen(!languageOpen);

  const languages = [
    { code: "en", name: "English" },
    { code: "hi", name: "हिंदी" },
    { code: "te", name: "తెలుగు" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 nav-container">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold text-purple-700">
            <Link to="/"> 
            <img src={logo} alt="logo" style={{
              height:"50px"
            }} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Centered Nav Links */}
            <ul className="flex gap-6 text-gray-800 font-medium">
              <li>
                <Link 
                  to="/" 
                  className="hover:text-purple-600 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="hover:text-purple-600 transition-colors duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="hover:text-purple-600 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="hover:text-purple-600 transition-colors duration-200"
                >
                  About
                </Link>
              </li>
            </ul>

            {/* Right Side Elements */}
            <div className="flex items-center gap-6 ml-6">
              {/* Contact Number */}
              <div className="flex items-center gap-2">
                <svg 
                  className="w-5 h-5 text-purple-600" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <a 
                  href="tel:+91 8757304353" 
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
                >
                  +91 8757304353
                </a>
              </div>

              {/* Language Selector */}
              {/* <div className="relative">
                <button 
                  onClick={toggleLanguage}
                  className="flex items-center gap-1 text-gray-700 hover:text-purple-600 transition-colors duration-200"
                >
                  <span>EN</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${languageOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>

                <AnimatePresence>
                  {languageOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 z-50"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                          onClick={() => {
                            // Handle language change
                            setLanguageOpen(false);
                          }}
                        >
                          {lang.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div> */}
            </div>
          </div>

          {/* Mobile Menu Toggle and Right Icons */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Contact Icon (Mobile) */}
            <a 
              href="tel:+1234567890" 
              className="text-purple-600 p-2 rounded-full hover:bg-purple-50 transition-colors duration-200"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
            </a>

            {/* Language Selector (Mobile) */}
            <button 
              onClick={toggleLanguage}
              className="text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              <span className="text-sm font-medium">EN</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="text-2xl focus:outline-none p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              onClick={toggleMenu}
            >
              {menuOpen ? (
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <ul className="flex flex-col gap-3 py-4 text-gray-800 font-medium border-t mt-2">
                <li>
                  <Link 
                    to="/" 
                    className="block py-2 px-4 hover:bg-purple-50 hover:text-purple-600 rounded transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services" 
                    className="block py-2 px-4 hover:bg-purple-50 hover:text-purple-600 rounded transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/internships" 
                    className="block py-2 px-4 hover:bg-purple-50 hover:text-purple-600 rounded transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    Internships
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about" 
                    className="block py-2 px-4 hover:bg-purple-50 hover:text-purple-600 rounded transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className="block py-2 px-4 hover:bg-purple-50 hover:text-purple-600 rounded transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;