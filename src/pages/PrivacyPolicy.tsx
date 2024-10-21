import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-neutral-100 min-h-screen py-12">
      <Helmet>
        <title>Privacy Policy - MyFiladelfia</title>
        <meta name="description" content="MyFiladelfia's Privacy Policy, including information about POPIA and PAIA compliance." />
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-primary-dark">Privacy Policy</h1>
        
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-dark">Introduction</h2>
          <p className="mb-4 text-gray-700">
            MyFiladelfia ("we", "our", or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website or services.
          </p>
          <p className="mb-4 text-gray-700">
            We comply with the Protection of Personal Information Act (POPIA) and the Promotion of Access to Information Act (PAIA) in South Africa. For more information about your rights under these acts, please see the relevant sections below.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-dark">Information We Collect</h2>
          <p className="mb-4 text-gray-700">We may collect personal information such as:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Name, email address, and contact details</li>
            <li>Educational background and course enrollment information</li>
            <li>Payment information for course fees</li>
            <li>Information you provide in forms or surveys</li>
            <li>Usage data and cookies (see our <Link to="/cookie-policy" className="text-primary hover:underline">Cookie Policy</Link> for more details)</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-dark">How We Use Your Information</h2>
          <p className="mb-4 text-gray-700">We use your information to:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Provide and improve our services</li>
            <li>Process payments and enrollments</li>
            <li>Communicate with you about courses and updates</li>
            <li>Comply with legal obligations</li>
            <li>Analyze and improve our website and services</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-dark">POPIA Compliance</h2>
          <p className="mb-4 text-gray-700">
            In accordance with the Protection of Personal Information Act (POPIA), we ensure that:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>We only collect and process personal information with your consent or as required by law</li>
            <li>We use your information for the purposes for which it was collected</li>
            <li>We keep your information secure and protect it from unauthorized access</li>
            <li>We allow you to access and correct your personal information</li>
            <li>We only retain your information for as long as necessary</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-dark">PAIA Compliance</h2>
          <p className="mb-4 text-gray-700">
            In compliance with the Promotion of Access to Information Act (PAIA), we have a PAIA manual available upon request. This manual outlines the process for requesting access to information held by MyFiladelfia.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-dark">Your Rights</h2>
          <p className="mb-4 text-gray-700">You have the right to:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Access your personal information</li>
            <li>Correct or update your personal information</li>
            <li>Request deletion of your personal information</li>
            <li>Object to the processing of your personal information</li>
            <li>Withdraw consent for the use of your personal information</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-dark">Contact Us</h2>
          <p className="mb-4 text-gray-700">
            If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:
          </p>
          <p className="text-gray-700">Email: privacy@myfiladelfia.com</p>
          <p className="text-gray-700">Address: 7 Mc Farlane Street, Paarl, 7646, South Africa</p>
        </section>

        <p className="text-sm text-gray-600">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;