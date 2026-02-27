import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { name: 'Sevvy', to: '/' },
  { name: 'Pricing', to: '/pricing' },
  { name: 'Who is Sevvy for', to: '/who-is-sevvy' },
  { name: 'How Sevvy works', to: '/how-sevvy-works' },
  { name: 'Blogs', to: '/blog' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-gray-100 py-6 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-full shadow-sm flex items-center justify-between h-[70px] px-6">
          {/* Left: Logo + NavLinks */}
          <div className="flex items-center space-x-8">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `font-bold text-lg transition-colors duration-200 py-1 border-t-2 border-b-2 ${
                  isActive
                    ? 'text-orange-500 border-orange-400'
                    : 'text-gray-800 border-transparent'
                }`
              }
            >
              sevvy<span className="text-orange-500">.</span>
            </NavLink>
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.slice(1).map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-base font-medium transition-colors duration-200 py-1 ${
                      isActive
                        ? 'text-orange-500 border-t-2 border-b-2 border-orange-400'
                        : 'text-gray-500 hover:text-black border-t-2 border-b-2 border-transparent'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Hamburger Icon (Mobile) */}
          <button
            className="md:hidden flex items-center justify-center p-2 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open Menu"
          >
            <svg
              className="w-7 h-7 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Right Side Button */}
          <Link
            to="/waitlist"
            className="ml-4 bg-gradient-to-r from-orange-500 to-orange-200 text-white font-medium px-6 py-2 rounded-2xl shadow transition-transform duration-200 hover:scale-105 hidden md:inline-block hover:shadow-xl hover:shadow-orange-200"
          >
            Join Waitlist →
          </Link>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-2xl shadow-lg py-4 px-6 flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `text-base font-medium transition-colors duration-200 ${
                    isActive ? 'text-orange-500' : 'text-gray-700 hover:text-black'
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/waitlist"
              className="w-full text-center bg-gradient-to-r from-orange-500 to-orange-400 text-white font-medium px-6 py-2 rounded-full shadow transition-transform duration-200 hover:scale-105"
              onClick={() => setMenuOpen(false)}
            >
              Join Waitlist →
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;