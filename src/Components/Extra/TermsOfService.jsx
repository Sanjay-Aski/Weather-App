import React from 'react';

function TermsOfService() {
  return (
    <div className="terms-of-service-container bg-gray-100 text-gray-800 p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Terms of Service</h1>
        <p className="text-xl text-gray-600 mt-4">Please read our Terms of Service before using our website.</p>
      </div>

      <div className="section mb-10">
        <h2 className="text-3xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p className="text-lg text-gray-700">
          By accessing and using this website, you agree to abide by these Terms of Service. If you do not agree with any of the terms, please refrain from using the website.
        </p>
      </div>

      <div className="section mb-10">
        <h2 className="text-3xl font-semibold mb-4">2. Use of Website</h2>
        <p className="text-lg text-gray-700">
          You are granted a non-transferable license to use the website for personal, non-commercial use. You agree not to misuse the website or attempt to disrupt its operations.
        </p>
      </div>

      <div className="section mb-10">
        <h2 className="text-3xl font-semibold mb-4">3. Account Security</h2>
        <p className="text-lg text-gray-700">
          If you create an account on our website, you are responsible for maintaining the confidentiality of your account information and password. You agree to notify us immediately of any unauthorized access.
        </p>
      </div>

      <div className="section mb-10">
        <h2 className="text-3xl font-semibold mb-4">4. Limitation of Liability</h2>
        <p className="text-lg text-gray-700">
          We are not liable for any damages arising from your use or inability to use the website. This includes, but is not limited to, direct, indirect, incidental, or consequential damages.
        </p>
      </div>

      <div className="section mb-10">
        <h2 className="text-3xl font-semibold mb-4">5. Changes to Terms</h2>
        <p className="text-lg text-gray-700">
          We reserve the right to modify or update these Terms of Service at any time. Any changes will be posted on this page with an updated revision date.
        </p>
      </div>

      <div className="footer text-center text-gray-600 mt-16">
        <p>&copy; 2025 Company Name. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default TermsOfService;
