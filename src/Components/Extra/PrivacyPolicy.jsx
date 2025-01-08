import React from 'react';

function PrivacyPolicy() {
  return (
    <div className="privacy-policy-container bg-gray-100 text-gray-800 p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="text-xl text-gray-600 mt-4">Your privacy is important to us. This page explains how we collect and protect your personal information.</p>
      </div>

      <div className="section mb-10">
        <h2 className="text-3xl font-semibold mb-4">1. Information We Collect</h2>
        <p className="text-lg text-gray-700">
          We collect the following types of information when you use our website:
        </p>
        <ul className="list-disc ml-6 text-lg text-gray-700">
          <li>Personal identification information (e.g., name, email address)</li>
          <li>Technical data (e.g., browser type, IP address, device information)</li>
          <li>Usage data (e.g., pages visited, time spent on pages)</li>
        </ul>
      </div>

      <div className="section mb-10">
        <h2 className="text-3xl font-semibold mb-4">2. How We Use Your Information</h2>
        <p className="text-lg text-gray-700">
          We use the information we collect to improve our services, provide better user experience, and personalize your content. Specifically, we use your information to:
        </p>
        <ul className="list-disc ml-6 text-lg text-gray-700">
          <li>Process transactions and provide customer support</li>
          <li>Analyze website usage to improve functionality</li>
          <li>Send marketing communications (with your consent)</li>
        </ul>
      </div>

      <div className="section mb-10">
        <h2 className="text-3xl font-semibold mb-4">3. How We Protect Your Information</h2>
        <p className="text-lg text-gray-700">
          We implement a variety of security measures to maintain the safety of your personal information. These include encryption, secure servers, and regular security assessments.
        </p>
      </div>

      <div className="section mb-10">
        <h2 className="text-3xl font-semibold mb-4">4. Third-Party Sharing</h2>
        <p className="text-lg text-gray-700">
          We do not sell, trade, or otherwise transfer your personally identifiable information to third parties unless we have your consent or are required by law to do so.
        </p>
      </div>

      <div className="section mb-10">
        <h2 className="text-3xl font-semibold mb-4">5. Cookies</h2>
        <p className="text-lg text-gray-700">
          We use cookies to enhance the user experience and analyze website traffic. You can opt-out of cookie usage by changing your browser settings.
        </p>
      </div>

      <div className="footer text-center text-gray-600 mt-16">
        <p>&copy; 2025 Company Name. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
