import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYelp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="w-full py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Social Media Icons */}
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="#" className="text-gray-500 hover:text-blue-600">
                        <FaFacebook className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-pink-600">
                        <FaInstagram className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-500">
                        <FaLinkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-red-500">
                        <FaYelp className="h-5 w-5" />
                    </a>
                </div>

                {/* Copyright Text */}
                <div className="text-center text-gray-500 text-sm">
                    COPYRIGHT © {new Date().getFullYear()} MARCI METZGER HOMES - ALL RIGHTS RESERVED
                </div>
            </div>
        </footer>
    );
};

export default Footer;