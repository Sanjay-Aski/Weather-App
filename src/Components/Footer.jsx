import React from 'react';

const Footer = () => {
    return (
        <footer className="dark:bg-slate-800 bg-yellow-200 bg-opacity-40 text-white py-6 shadow-md dark:shadow-gray-100 -mt-6">
            <div className="container mx-auto text-center">
                <p className="text-sm dark:text-yellow-50 text-slate-900">© {new Date().getFullYear()} My Weather App All rights reserved.</p>
                <div className="flex justify-center mt-4 space-x-6">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="dark:text-gray-300 text-gray-500 hover:text-emerald-300">
                        Facebook
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="dark:text-gray-300 text-gray-500 hover:text-emerald-300">
                        Twitter
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="dark:text-gray-300 text-gray-500 hover:text-emerald-300">
                        LinkedIn
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="dark:text-gray-300 text-gray-500 hover:text-emerald-300">
                        Instagram
                    </a>
                    {/* Adding GitHub link */}
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="dark:text-gray-300 text-gray-500 hover:text-emerald-300">
                        GitHub
                    </a>
                </div>
                <div className="mt-4">
                    <a href="/about-us" className="dark:text-gray-400 text-gray-600 hover:text-emerald-300 text-sm">
                        About Us
                    </a>
                    <span className="mx-2">|</span>
                    <a href="/privacy-policy" className="dark:text-gray-400 text-gray-600 hover:text-emerald-300 text-sm">
                        Privacy Policy
                    </a>
                    <span className="mx-2">|</span>
                    <a href="/terms-of-service" className="dark:text-gray-400 text-gray-600 hover:text-emerald-300 text-sm">
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
