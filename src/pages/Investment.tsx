import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Info, FileText, CreditCard, Mail, ShoppingCart, BookOpen, GraduationCap, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const Investment: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Investment - MyFiladelfia</title>
        <meta name="description" content="Learn about the investment required for MyFiladelfia's training programs, including level courses and individual short courses." />
      </Helmet>
      <div className="bg-neutral-100 min-h-screen py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-primary-dark">Investment in Your Training</h1>
          
          <section className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary flex items-center">
              <Link to="/biblical-counselling" className="hover:underline">
                <Briefcase className="w-6 h-6 mr-2" />
                Biblical Counselling Level Courses (Per Calendar Year)
              </Link>
            </h2>
            <div className="mb-4 text-gray-600">
              <p className="text-lg">R2500 deposit at registration plus,</p>
              <p className="text-lg">R1980 p.m. x 12 months.</p>
              <p className="text-lg">(Level 3 - R1980 p.m. x 24 months)</p>
            </div>
            <div className="mb-4 text-gray-600">
              <p className="flex items-start mb-2">
                <Info className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <span>There is a 30-day cancellation period, after which you will be responsible for the entire course fee. The deposit is, however, non-refundable.</span>
              </p>
              <p className="flex items-start">
                <Info className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <span>All study fees paid to MyFiladelfia are non-refundable.</span>
              </p>
            </div>
            <a href="https://www.cognitoforms.com/MyFiladelfia/registrationanddebitorderform" target="_blank" rel="noopener noreferrer" className="btn btn-primary inline-flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              Registration Form for Level 1-3
            </a>
          </section>
          
          <section className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary flex items-center">
              <Link to="/short-courses" className="hover:underline">
                <BookOpen className="w-6 h-6 mr-2" />
                Individual Short Courses
              </Link>
            </h2>
            <div className="text-gray-600 mb-4">
              <p className="mb-4">Levels consist of courses. All the MyFiladelfia courses can be taken individually.</p>
            </div>
            <a href="mailto:jack@myfiladelfia.com" className="btn btn-primary inline-flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              Contact Pastor Jack for More Information
            </a>
          </section>
          
          <section className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary flex items-center">
              <Link to="/theological-skills" className="hover:underline">
                <BookOpen className="w-6 h-6 mr-2" />
                Theological Skills Pricing
              </Link>
            </h2>
            <div className="text-gray-600 mb-4">
              <p className="text-lg">R500 per module</p>
            </div>
            <a href="mailto:jack@myfiladelfia.com" className="btn btn-primary inline-flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              Show Interest
            </a>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary flex items-center">
              <Link to="/christian-religious-professional" className="hover:underline">
                <GraduationCap className="w-6 h-6 mr-2" />
                Christian Religious Professional Course Pricing
              </Link>
            </h2>
            <div className="text-gray-600 mb-4">
              <p><strong>Total Credits:</strong> 237</p>
              <p><strong>Price:</strong> R100 per credit</p>
              <p><strong>Total Course Cost:</strong> R23,700</p>
              <p>Pay in installments per month - contact for information.</p>
              <p>Or a one-time payment at 50% off - R11,850</p>
            </div>
            <a href="mailto:jack@myfiladelfia.com" className="btn btn-primary inline-flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              Show Interest
            </a>
          </section>
          
          <section className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary flex items-center">
              <CreditCard className="w-6 h-6 mr-2" />
              Banking Details
            </h2>
            <div className="text-gray-600">
              <p><strong>Account Name:</strong> FILADELFIA CHRISTELIKE BERADING KP BK</p>
              <p><strong>Bank:</strong> Nedbank</p>
              <p><strong>Account Type:</strong> Business Cheque Account</p>
              <p><strong>Branch Number:</strong> 102905</p>
              <p><strong>Account Number:</strong> 1029047235</p>
            </div>
          </section>

          <div className="text-center mt-8">
            <a href="http://www.myfiladelfiashop.com/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary inline-flex items-center">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Visit Our Shop for More Products and Course Offerings
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Investment;