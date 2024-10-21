import React from 'react';
import CourseCard from './CourseCard';
import { Book, Users, Briefcase, GraduationCap } from 'lucide-react';

const coursesData = [
  {
    title: "Theology Skills",
    description: "Develop essential theological skills with our comprehensive courses.",
    icon: <Book className="w-12 h-12 text-primary" />,
    link: "/theological-skills"
  },
  {
    title: "Biblical Counselling",
    description: "Comprehensive program covering various aspects of biblical counselling.",
    icon: <Users className="w-12 h-12 text-primary" />,
    link: "/biblical-counselling"
  },
  {
    title: "Christian Religious Professional",
    description: "Prepare for a career in Christian ministry with our accredited program.",
    icon: <Briefcase className="w-12 h-12 text-primary" />,
    link: "/christian-religious-professional"
  },
  {
    title: "Short Courses in Life Skills",
    description: "Enhance your personal growth and development with our practical life skills courses.",
    icon: <GraduationCap className="w-12 h-12 text-primary" />,
    link: "/short-courses"
  }
];

const Courses: React.FC = () => {
  return (
    <section id="courses" className="py-24 bg-neutral-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary-dark">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {coursesData.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;