import React from 'react';
import { Link } from 'react-router-dom';

interface CourseCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const CourseCard: React.FC<CourseCard> = ({ title, description, icon, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col h-full">
      <div className="p-6 flex flex-col flex-grow">
        <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-xl md:text-2xl font-sans font-semibold mb-3 text-primary-dark">{title}</h3>
        <p className="text-neutral-600 mb-4 flex-grow">{description}</p>
        <Link 
          to={link} 
          className="btn btn-primary w-full text-center transition-all duration-300 hover:bg-primary-dark py-3 text-lg"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;