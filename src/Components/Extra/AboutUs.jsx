import React from 'react';

function AboutUs() {
  return (
    <div className="about-us-container bg-gray-100 text-gray-800 p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-xl text-gray-600 mt-4">Get to know more about who we are and what we do.</p>
      </div>

      <div className="who-we-are mb-10">
        <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
        <p className="text-lg text-gray-700">
          We are a team of passionate individuals working towards creating impactful solutions for our community. 
          With a diverse set of skills, we strive to make a difference through innovation, creativity, and dedication.
        </p>
      </div>

      <div className="our-mission mb-10">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700">
          Our mission is to provide high-quality products and services that help solve real-world problems. 
          We are committed to sustainability, ethical practices, and delivering exceptional value to our customers.
        </p>
      </div>

      <div className="contact-info mb-10">
        <h2 className="text-3xl font-semibold mb-4">Contact Information</h2>
        <p className="text-lg text-gray-700">
          Have any questions or want to learn more? Get in touch with us!
        </p>
        <div className="mt-4">
          <p><strong>Email:</strong> contact@company.com</p>
          <p><strong>Phone:</strong> +123 456 7890</p>
          <p><strong>Address:</strong> 123 Company St, City, Country</p>
        </div>
      </div>

      <div className="footer text-center text-gray-600 mt-16">
        <p>&copy; 2025 Company Name. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default AboutUs;
