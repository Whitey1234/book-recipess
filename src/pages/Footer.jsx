import React from 'react';
import { Link } from 'react-router'; // fixed router import

const Footer = () => {
  return (
    <footer className="bg-blue-700 w-full text-base-200">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-10 p-10">
        {/* Logo & Info */}
        <div className="text-center md:text-left space-y-2">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <img src="https://i.ibb.co/SD19W4K1/chef-1.png" alt="Recipe Book" className="w-10 h-10" />
            <span className="font-bold text-xl text-white">Recipe Book</span>
          </div>
          <p className="text-sm text-gray-300">
            Share your love for cooking.<br />
            &copy; {new Date().getFullYear()} Recipe Book. All rights reserved.
          </p>
          {/* <p className="text-sm text-gray-300">
            Email: <a href="mailto:n.siyam120@gmail.com" className="underline hover:text-white">n.siyam120@gmail.com</a>
          </p>
          <p className="text-sm text-gray-300">Phone: 01743299919</p> */}
        </div>

        {/* Quick Links */}
        <div className="space-y-2 text-center md:text-left">
          <h4 className="font-semibold text-white">Quick Links</h4>
          <ul className="space-y-1 text-gray-300">
            <li><Link className="hover:underline" to="/">Home</Link></li>
            <li><Link className="hover:underline" to="/about">About Us</Link></li>
            <li><Link className="hover:underline" to="/allrecipe">All Recipes</Link></li>
            <li><Link className="hover:underline" to="/contact">Contact</Link></li>
            <li><Link className="hover:underline" to="/support">Support</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="space-y-2 text-center md:text-left">
          <h4 className="font-semibold text-white">Follow Us</h4>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="https://www.facebook.com/najmul.hassan.571047" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="w-6 h-6" />
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
