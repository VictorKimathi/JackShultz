import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
import Button from './Button';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/about" className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">
              Jack Shultz
            </h1>
            {/* <span className="hidden md:block text-sm text-gray-600 ml-2">
              Travel Copywriter
            </span> */}
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/portfolio" className={({
            isActive
          }) => isActive ? 'text-[#FF6900] font-medium' : 'text-gray-700 hover:text-[#FF6900]'}>
              Portfolio
            </NavLink>
            <NavLink to="/services" className={({
            isActive
          }) => isActive ? 'text-[#FF6900] font-medium' : 'text-gray-700 hover:text-[#FF6900]'}>
              Services
            </NavLink>
            <NavLink to="/about" className={({
            isActive
          }) => isActive ? 'text-[#FF6900] font-medium' : 'text-gray-700 hover:text-[#FF6900]'}>
              About
            </NavLink>
            <NavLink to="/contact" className={({
            isActive
          }) => isActive ? 'text-[#FF6900] font-medium' : 'text-gray-700 hover:text-[#FF6900]'}>
              Contact
            </NavLink>
          </nav>
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button as={Link} to="/contact" variant="primary">
              Get a Quote
            </Button>
          </div>
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-gray-700" onClick={toggleMenu} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <NavLink to="/portfolio" className={({
          isActive
        }) => `block py-2 ${isActive ? 'text-[#FF6900] font-medium' : 'text-gray-700'}`} onClick={toggleMenu}>
              Portfolio
            </NavLink>
            <NavLink to="/services" className={({
          isActive
        }) => `block py-2 ${isActive ? 'text-[#FF6900] font-medium' : 'text-gray-700'}`} onClick={toggleMenu}>
              Services
            </NavLink>
            <NavLink to="/about" className={({
          isActive
        }) => `block py-2 ${isActive ? 'text-[#FF6900] font-medium' : 'text-gray-700'}`} onClick={toggleMenu}>
              About
            </NavLink>
            <NavLink to="/contact" className={({
          isActive
        }) => `block py-2 ${isActive ? 'text-[#FF6900] font-medium' : 'text-gray-700'}`} onClick={toggleMenu}>
              Contact
            </NavLink>
            <div className="pt-2">
              <Button as={Link} to="/contact" variant="primary" fullWidth onClick={toggleMenu}>
                Get a Quote
              </Button>
            </div>
          </div>
        </div>}
    </header>;
};
export default Header;