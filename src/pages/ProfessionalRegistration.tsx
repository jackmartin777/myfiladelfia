import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight } from 'lucide-react';

const ProfessionalRegistration: React.FC = () => {
  return (
    <div className="bg-neutral-100 min-h-screen">
      <Helmet>
        <title>Professional Registration - MyFiladelfia</title>
        <meta name="description" content="Learn about the pathway to professional registration with ASCHP or CCSA after completing MyFiladelfia's courses." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-primary-dark">Pathway to Professional Registration</h1>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Registration Process</h2>
          <p className="text-gray-700 mb-6">
            Upon completion of MyFiladelfia's courses, graduates have the opportunity to register with professional bodies such as the Association for Supportive Counsellors and Holistic Practitioners (ASCHP) or the Council for Counsellors in South Africa (CCSA). This registration enhances your professional credibility and opens up new career opportunities.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Steps to Registration</h2>
          <ol className="list-decimal pl-6 space-y-4 text-gray-700">
            <li>Complete your chosen course at MyFiladelfia</li>
            <li>Obtain your qualification certificate</li>
            <li>Choose between ASCHP or CCSA for registration</li>
            <li>Submit your application to the chosen body</li>
            <li>Provide necessary documentation (qualification, ID, etc.)</li>
            <li>Pay the registration fee</li>
            <li>Await approval from the professional body</li>
          </ol>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Benefits of Professional Registration</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-primary mr-2 mt-1" />
              <span>Enhanced professional credibility</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-primary mr-2 mt-1" />
              <span>Access to professional networks and resources</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-primary mr-2 mt-1" />
              <span>Ongoing professional development opportunities</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-primary mr-2 mt-1" />
              <span>Adherence to ethical standards in practice</span>
            </li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Ready to Start Your Journey?</h2>
          <p className="text-gray-700 mb-6">
            Begin your path to professional registration by enrolling in one of our accredited courses. Our team is here to support you every step of the way, from course completion to professional registration.
          </p>
          <a href="/courses" className="btn btn-primary inline-flex items-center">
            Explore Our Courses <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </section>
      </div>
    </div>
  );
};

export default ProfessionalRegistration;