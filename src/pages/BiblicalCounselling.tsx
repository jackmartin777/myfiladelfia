import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase } from 'lucide-react';
import SEO from '../components/SEO';

const BiblicalCounselling: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Biblical Counselling",
    "description": "Comprehensive Biblical Counselling program designed to equip students with Scripture-based counseling techniques.",
    "provider": {
      "@type": "Organization",
      "name": "MyFiladelfia",
      "sameAs": "https://www.myfiladelfia.com"
    },
    "hasCourseInstance": [
      {
        "@type": "CourseInstance",
        "name": "Level 1: Foundation in Biblical Counselling",
        "courseMode": "online"
      },
      {
        "@type": "CourseInstance",
        "name": "Level 2: Advanced Counselling Techniques",
        "courseMode": "online"
      },
      {
        "@type": "CourseInstance",
        "name": "Level 3: Specialized Counselling and Practicum",
        "courseMode": "online"
      }
    ]
  };

  return (
    <div className="bg-neutral-100 min-h-screen">
      <SEO 
        title="Biblical Counselling - MyFiladelfia"
        description="Explore MyFiladelfia's comprehensive Biblical Counselling program, designed to equip you with the skills to provide Christ-centered counseling."
        canonicalUrl="/biblical-counselling"
        structuredData={structuredData}
      />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-primary-dark">Biblical Counselling</h1>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Program Overview</h2>
          <p className="text-gray-700 mb-6">
            Our Biblical Counselling program is designed to equip students with a solid foundation in Scripture-based counseling techniques. This comprehensive course covers various aspects of pastoral care and counseling, integrating biblical principles with practical skills.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Program Structure</h2>
          <p className="text-gray-700 mb-6">
            Our comprehensive curriculum is designed to equip you with the knowledge and skills necessary for effective biblical counseling and ministry. The program is divided into three levels, each building upon the previous to provide a solid foundation in theology, counseling techniques, and practical ministry skills.
          </p>
          <div className="space-y-4">
            <Link to="/biblical-counselling/level-1" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 className="text-xl font-semibold text-primary-dark flex items-center">
                Level 1: Foundation in Biblical Counselling
                <ArrowRight className="ml-2 w-5 h-5" />
              </h3>
            </Link>
            <Link to="/biblical-counselling/level-2" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 className="text-xl font-semibold text-primary-dark flex items-center">
                Level 2: Advanced Counselling Techniques
                <ArrowRight className="ml-2 w-5 h-5" />
              </h3>
            </Link>
            <Link to="/biblical-counselling/level-3" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 className="text-xl font-semibold text-primary-dark flex items-center">
                Level 3: Specialized Counselling and Practicum
                <ArrowRight className="ml-2 w-5 h-5" />
              </h3>
            </Link>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Ready to Start Your Journey?</h2>
          <p className="text-gray-700 mb-6">
            Begin your path to becoming a skilled biblical counselor by enrolling in our comprehensive program. Our team is here to support you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn btn-primary inline-flex items-center">
              Apply Now <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/investment" className="btn btn-secondary inline-flex items-center">
              View Full Investment Details <Briefcase className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BiblicalCounselling;