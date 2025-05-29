import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark py-6 shadow-md border-t border-primary-light dark:border-primary-dark">
            <div className="container mx-auto text-center">
                <p className="text-sm">© {new Date().getFullYear()} My Weather App All rights reserved.</p>
                <div className="flex justify-center mt-4 space-x-6">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors">
                        Facebook
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors">
                        Twitter
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors">
                        LinkedIn
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors">
                        Instagram
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-light dark:hover:text-accent-dark transition-colors">
                        GitHub
                    </a>
                </div>
                <div className="mt-4">
                    <a href="/about-us" className="hover:text-accent-light dark:hover:text-accent-dark text-sm transition-colors">
                        About Us
                    </a>
                    <span className="mx-2">|</span>
                    <a href="/privacy-policy" className="hover:text-accent-light dark:hover:text-accent-dark text-sm transition-colors">
                        Privacy Policy
                    </a>
                    <span className="mx-2">|</span>
                    <a href="/terms-of-service" className="hover:text-accent-light dark:hover:text-accent-dark text-sm transition-colors">
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
