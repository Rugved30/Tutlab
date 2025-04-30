import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const loginButton = () =>{
    console.log("clicked");
    
    navigate('/login');
  };


  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Company Logo/Name */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-blue-600">
              Tutlabs
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 items-center">
            <Link to='/' className="text-gray-800 hover:bg-blue-50 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300">Home</Link>
            <Link to='/findtutor' className="text-gray-800 hover:bg-blue-50 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300">Find Tutor</Link>
            <Link to='/gettutorjobs' className="text-gray-800 hover:bg-blue-50 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300">Find Tutor Jobs</Link>
            <Link to='/registertutor' className="text-gray-800 hover:bg-blue-50 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300">Register as Tutor</Link>
            <Link to='/aboutus' className="text-gray-800 hover:bg-blue-50 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300">AboutUs</Link>
            <button onClick={loginButton} type='button' className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="text-gray-800 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to='/' className="text-gray-800 hover:bg-blue-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
              <Link to='/Home' className="text-gray-800 hover:bg-blue-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Find Tutor</Link>
              <Link to='/Home' className="text-gray-800 hover:bg-blue-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Find Tutor Jobs</Link>
              <Link to='/registertutor' className="text-gray-800 hover:bg-blue-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Register As Tutor</Link>
              <button onClick={loginButton} type='button' className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 mt-2">
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;