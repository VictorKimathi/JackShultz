import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h2 className="text-xl font-bold mb-4">Jack Shultz</h2>
            <p className="text-gray-300 mb-6">
              Crafting compelling travel narratives for a global audience.
            </p>
          </div>
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#FF6900]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-[#FF6900]">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-[#FF6900]">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#FF6900]">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#FF6900]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Content Categories */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Expertise</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/portfolio?category=longform" className="text-gray-300 hover:text-[#FF6900]">
                  Longform Features
                </Link>
              </li>
              <li>
                <Link to="/portfolio?category=destination" className="text-gray-300 hover:text-[#FF6900]">
                  Destination Guides
                </Link>
              </li>
              <li>
                <Link to="/portfolio?category=brand" className="text-gray-300 hover:text-[#FF6900]">
                  Brand Content
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-[#FF6900]">
                  SEO Writing
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 flex-shrink-0" />
                <a href="mailto:jackshultz967@gmail.com" className="text-gray-300 hover:text-[#FF6900]">
                  jackshultz967@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 flex-shrink-0" />
                <a href="tel:2254819327" className="text-gray-300 hover:text-[#FF6900]">
                  225-481-9327
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Hubertus, WI, USA</span>
              </li>
              {/* <li className="flex items-start">
                <Linkedin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <a href="#" className="text-gray-300 hover:text-[#FF6900]">
                  LinkedIn
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Jack Shultz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;