import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const TermsOfService: React.FC = () => {
  return (
    <div className="bg-neutral-100 min-h-screen py-12">
      <Helmet>
        <title>Terms of Service - MyFiladelfia</title>
        <meta name="description" content="MyFiladelfia's Terms of Service for our educational and faith-based services." />
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-primary-dark">Terms of Service</h1>
        
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-dark">1. Introduction</h2>
          <p className="mb-4 text-gray-700">
            Welcome to MyFiladelfia. These Terms of Service govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-dark">2. Services</h2>
          <p className="mb-4 text-gray-700">
            MyFiladelfia provides educational and faith-based services, including but not limited to online courses, workshops, and resources. We are a registered skills development provider in South Africa.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-dark">3. User Responsibilities</h2>
          <p className="mb-4 text-gray-700">
            As a user of our services, you agree to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Provide accurate and complete information when registering or using our services</li>
            <li>Use our services in compliance with all applicable laws and regulations</li>
            <li>Respect the intellectual property rights of MyFiladelfia and other users</li>
            <li>Maintain the confidentiality of your account information</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-dark">4. Intellectual Property</h2>
          <p className="mb-4 text-gray-700">
            All content provided through our services, including but not limited to text, graphics, logos, and course materials, is the property of MyFiladelfia or its licensors and is protected by South African and international copyright laws.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-dark">5. Payment and Refunds</h2>
          <p className="mb-4 text-gray-700">
            Payment for our services is due at the time of registration unless otherwise specified. Our refund policy is in accordance with the Consumer Protection Act of South Africa. Please refer to our specific course or program terms for detailed refund information.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-dark">6. Limitation of Liability</h2>
          <p className="mb-4 text-gray-700">
            MyFiladelfia strives to provide high-quality educational services, but we do not guarantee specific outcomes or results from the use of our services. Our liability is limited to the extent permitted by South African law.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-dark">7. Privacy and Data Protection</h2>
          <p className="mb-4 text-gray-700">
            We are committed to protecting your privacy and personal information in accordance with the Protection of Personal Information Act (POPIA) of South Africa. Please refer to our <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link> for more information.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-dark">8. Amendments to Terms</h2>
          <p className="mb-4 text-gray-700">
            MyFiladelfia reserves the right to modify these Terms of Service at any time. We will notify users of any significant changes. Your continued use of our services after such modifications constitutes acceptance of the updated terms.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-dark">9. Governing Law</h2>
          <p className="mb-4 text-gray-700">
            These Terms of Service are governed by and construed in accordance with the laws of South Africa. Any disputes arising from these terms or our services will be subject to the exclusive jurisdiction of the South African courts.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-dark">10. Contact Us</h2>
          <p className="mb-4 text-gray-700">
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <p className="text-gray-700">Email: info@myfiladelfia.com</p>
          <p className="text-gray-700">Address: 7 Mc Farlane Street, Paarl, 7646, South Africa</p>
        </section>

        <p className="text-sm text-gray-600">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;