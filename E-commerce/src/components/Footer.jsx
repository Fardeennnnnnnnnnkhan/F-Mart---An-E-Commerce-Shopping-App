
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-zinc-800 w-full p-4 text-white h-[25vh] flex flex-col justify-between py-8">
      <div className="container mx-auto  w-full flex flex-col md:flex-row justify-between items-start">
        <div className="mb-4 md:mb-0">
          <h1 className="text-4xl text-green-600 font-bold mb-4">F-Mart</h1>
          <p className="mb-4 font-xl">Leading the way in e-commerce</p>
        </div>

        <div className="flex flex-col   md:flex-row md:space-x-8 mb-4 md:mb-0">
          <a href="/about" className="hover:underline mb-2 md:mb-0">About Us</a>
          <a href="/contact" className="hover:underline mb-2 md:mb-0">Contact</a>
          <a href="/privacy" className="hover:underline mb-2 md:mb-0">Privacy Policy</a>
          <a href="/terms" className="hover:underline">Terms of Service</a>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-8 mb-4 md:mb-0">
          <p className="mb-2 md:mb-0">Contact us: (123) 456-7890</p>
          <p className="mb-2 md:mb-0">Email: support@fmart.com</p>
        </div>

        <div className="w-full md:w-auto">
          <h2 className="text-xl font-semibold mb-2">Subscribe to our newsletter</h2>
          <form className="flex flex-col md:flex-row items-center">
            <input 
              type="email" 
              className="p-2 border border-gray-300 rounded md:mr-2 mb-2 md:mb-0"
              placeholder="Your email address"
            />
            <button type="submit" className="p-2 bg-gray-800 text-white rounded">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="w-full bg-zinc-600 text-white text-center p-4">
      <p>Follow us on:</p>
      <div className="flex w-full justify-center  space-x-6 mt-2">
        <a href="https://facebook.com" aria-label="Facebook" className="hover:text-blue-600">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" aria-label="Twitter" className="hover:text-blue-400">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" aria-label="Instagram" className="hover:text-pink-600">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-blue-800">
          <FaLinkedinIn />
        </a>
      </div>
      <div className="mt-4">
        &copy; {new Date().getFullYear()} F-Mart. All rights reserved.
      </div>
    </div>
    </footer>
  );
};

export default Footer;
