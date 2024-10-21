import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Book, Users, Briefcase, GraduationCap } from 'lucide-react';

const CourseCard: React.FC<{ title: string; description: string; icon: React.ReactNode; link: string }> = ({ title, description, icon, link }) => (
  <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
    <div className="text-primary mb-4 flex justify-center">{icon}</div>
    <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary-dark">{title}</h2>
    <p className="text-neutral-800 mb-4">{description}</p>
    <Link to={link} className="text-primary hover:text-primary-dark inline-block mt-2 p-2">Learn More</Link>
  </div>
);

const AllCourses: React.FC = () => {
  return (
    <div className="bg-neutral-100 min-h-screen">
      <Helmet>
        <title>All Courses - MyFiladelfia</title>
        <meta name="description" content="Explore MyFiladelfia's comprehensive range of courses including Biblical Counselling, Theological Skills, Christian Religious Professional, and Short Courses." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[#FAA61B]">Our Courses</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <CourseCard
            title="Biblical Counselling"
            description="A comprehensive program covering various aspects of biblical counselling across three levels."
            icon={<Book className="w-12 h-12" />}
            link="/biblical-counselling"
          />
          <CourseCard
            title="Theological Skills"
            description="Develop essential theological skills with our comprehensive courses."
            icon={<Users className="w-12 h-12" />}
            link="/theological-skills"
          />
          <CourseCard
            title="Christian Religious Professional"
            description="Prepare for a career in Christian ministry with our QCTO accredited program."
            icon={<Briefcase className="w-12 h-12" />}
            link="/christian-religious-professional"
          />
          <CourseCard
            title="Short Courses"
            description="Explore our range of short courses designed to enhance your biblical knowledge and ministry skills."
            icon={<GraduationCap className="w-12 h-12" />}
            link="/short-courses"
          />
        </div>
      </div>
    </div>
  );
};

export default AllCourses;