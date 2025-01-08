import React from 'react';
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-8">
            <div className="container mx-auto text-center">
                <p className="text-sm">© {new Date().getFullYear()} My Weather App - All rights reserved.</p>
                <div className="flex justify-center mt-4 space-x-6">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                        Facebook
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                        Twitter
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                        LinkedIn
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                        Instagram
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                        GitHub
                    </a>
                </div>
                <div className="mt-4">
                    <a href="/about-us" className="text-gray-400 hover:text-white text-sm">
                        About Us
                    </a>
                    <span className="mx-2">|</span>
                    <a href="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
                        Privacy Policy
                    </a>
                    <span className="mx-2">|</span>
                    <a href="/terms-of-service" className="text-gray-400 hover:text-white text-sm">
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
}


export default Footer;
