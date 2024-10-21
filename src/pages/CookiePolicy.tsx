import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const CookiePolicy: React.FC = () => {
  return (
    <div className="bg-neutral-100 min-h-screen py-12">
      <Helmet>
        <title>Cookie Policy - MyFiladelfia</title>
        <meta name="description" content="MyFiladelfia's Cookie Policy explaining how we use cookies and similar technologies." />
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-primary-dark">Cookie Policy</h1>
        
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-dark">Introduction</h2>
          <p className="mb-4 text-gray-700">
            This Cookie Policy explains how MyFiladelfia ("we", "our", or "us") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-dark">What are cookies?</h2>
          <p className="mb-4 text-gray-700">
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-dark">Why do we use cookies?</h2>
          <p className="mb-4 text-gray-700">We use cookies for several reasons:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>To enable certain functions of the website</li>
            <li>To provide analytics</li>
            <li>To store your preferences</li>
            <li>To enable ad delivery and behavioral advertising</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-dark">Types of cookies we use</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li><strong>Essential cookies:</strong> These are cookies that are required for the operation of our website.</li>
            <li><strong>Analytical cookies:</strong> These allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it.</li>
            <li><strong>Functionality cookies:</strong> These are used to recognize you when you return to our website.</li>
            <li><strong>Targeting cookies:</strong> These cookies record your visit to our website, the pages you have visited and the links you have followed.</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-dark">How can you control cookies?</h2>
          <p className="mb-4 text-gray-700">
            You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-dark">Your Consent</h2>
          <p className="mb-4 text-gray-700">
            By continuing to use our website, you are agreeing to our placing cookies on your computer or device. If you do not wish to accept cookies in connection with your use of this website, you must stop using our website.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary-dark">More Information</h2>
          <p className="mb-4 text-gray-700">
            For more information about how we use your personal data, please see our <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
          </p>
        </section>

        <p className="text-sm text-gray-600">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default CookiePolicy;