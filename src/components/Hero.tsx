import React, { useEffect } from 'react';
import { HeartHandshake, Download } from 'lucide-react';
import LazyImage from './LazyImage';

const Hero: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroImage = document.querySelector('.hero-image') as HTMLElement;
      if (heroImage) {
        heroImage.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 hero-image">
        <LazyImage
          src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Hero background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="w-24 h-24 mx-auto mb-8 text-[#FAA61B]">
          <HeartHandshake className="w-full h-full" />
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-sans font-extrabold mb-8 animate-fadeIn text-[#FAA61B]">
          Empowering Believers with Online Theology Courses
        </h1>
        <p className="text-xl mb-10 max-w-2xl mx-auto text-neutral-100">
          MyFiladelfia: A Biblically-based network Theology Courses in pastoral counselling, and life skills. 
        </p>
        <div className="flex justify-center">
          <a 
            href="https://drive.google.com/drive/folders/1ZNJ5TH1LpKDhpw5CMDk90YQv6EFJ5V4L?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-secondary flex items-center"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;