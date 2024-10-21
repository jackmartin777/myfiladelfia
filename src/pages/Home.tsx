import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Courses from '../components/Courses';
import Accreditations from '../components/Accreditations';
import Features from '../components/Features';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import { X, Heart } from 'lucide-react';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCookieConsent(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    setShowCookieConsent(false);
    // Here you can add logic to set a cookie or local storage item
    // to remember that the user has accepted the cookie policy
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "MyFiladelfia",
    "description": "Online theology and biblical counselling courses",
    "url": "https://www.myfiladelfia.com",
    "sameAs": [
      "https://www.facebook.com/myfiladelfiasdp",
      "https://twitter.com/myfiladelfiasdp",
      "https://www.instagram.com/myfiladelfiasdp/",
      "https://www.linkedin.com/in/pastjackmartin/",
      "https://www.youtube.com/@MyFiladelfiaSDP"
    ]
  };

  return (
    <>
      <SEO 
        title="MyFiladelfia - Online Theology & Biblical Counselling Courses"
        description="Empower your faith journey with MyFiladelfia's accredited online theology and biblical counselling courses. Join our global community of Christian leaders."
        canonicalUrl="/"
        structuredData={structuredData}
      />
      <Hero />
      <Courses />
      <Accreditations />
      <Features />
      <section className="bg-primary-dark py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Need Counselling?</h2>
          <p className="text-xl mb-12 text-white max-w-2xl mx-auto">We're here to support you on your journey to healing and growth.</p>
          <Link to="/need-counselling" className="btn btn-secondary inline-flex items-center text-lg px-8 py-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <Heart className="w-6 h-6 mr-3" />
            Get Support Now
          </Link>
        </div>
      </section>
      <Blog />
      <Contact />

      {showCookieConsent && (
        <div className="fixed bottom-4 right-4 bg-white p-6 rounded-lg shadow-xl max-w-sm z-50 animate-fadeIn">
          <button 
            onClick={() => setShowCookieConsent(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition-colors p-2"
          >
            <X size={24} />
          </button>
          <p className="text-gray-700 mb-4">
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
          </p>
          <div className="flex justify-between items-center">
            <Link to="/cookie-policy" className="text-primary text-sm hover:underline p-2">
              Learn more
            </Link>
            <button
              onClick={handleAccept}
              className="bg-primary text-white px-6 py-2 rounded-md text-sm hover:bg-primary-dark transition-colors"
            >
              I Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;