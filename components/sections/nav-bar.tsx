import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
            }`}>
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
                            <Image src='https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/blob-6c0c2e0.png/:/rs=w:1071,h:334,cg:true,m/cr=w:1071,h:334/qt=q:95' alt="Logo" width={150} height={50} />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-gray-800 hover:text-gray-600 transition-colors font-medium">
                            Home
                        </Link>
                        <Link href="/listings" className="text-gray-800 hover:text-gray-600 transition-colors font-medium">
                            Listings
                        </Link>
                        <Link href="/letsmove" className="text-gray-800 hover:text-gray-600 transition-colors font-medium">
                            Let&apos;s Move
                        </Link>
                        <Link href="/about" className="text-gray-800 hover:text-gray-600 transition-colors font-medium">
                            About Us
                        </Link>

                        {/* WhatsApp Icon */}
                        <a
                            href="https://wa.me/1234567890" // Replace with your WhatsApp number
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-600 hover:text-green-700 transition-colors"
                            aria-label="Contact us on WhatsApp"
                        >
                            <FaWhatsapp size={24} />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        {/* WhatsApp Icon (Mobile) */}
                        <a
                            href="https://wa.me/1234567890" // Replace with your WhatsApp number
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-600 hover:text-green-700 mr-4"
                            aria-label="Contact us on WhatsApp"
                        >
                            <FaWhatsapp size={20} />
                        </a>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-gray-900 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-white/95 backdrop-blur-md">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <Link
                                href="/"
                                className="block px-3 py-2 rounded-md text-gray-800 hover:bg-gray-100 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/listings"
                                className="block px-3 py-2 rounded-md text-gray-800 hover:bg-gray-100 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Listings
                            </Link>
                            <Link
                                href="/letsmove"
                                className="block px-3 py-2 rounded-md text-gray-800 hover:bg-gray-100 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Let&apos;s Move
                            </Link>
                            <Link
                                href="/about"
                                className="block px-3 py-2 rounded-md text-gray-800 hover:bg-gray-100 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;