import React from 'react';
import { Share2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface Module {
  code: string;
  title: string;
  items: string[];
}

interface LevelPageProps {
  level: string;
  duration: string;
  certification: string;
  description: string;
  modules: Module[];
}

const LevelPage: React.FC<LevelPageProps> = ({ level, duration, certification, description, modules }) => {
  const pageTitle = `Level ${level} Biblical Counselling - MyFiladelfia`;
  const pageUrl = `https://www.myfiladelfia.com/biblical-counselling/level-${level}`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: pageTitle,
          text: `Check out MyFiladelfia's Level ${level} Biblical Counselling course!`,
          url: pageUrl,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      alert('Web Share API not supported in your browser. You can copy the URL to share.');
    }
  };

  return (
    <div className="bg-neutral-100 min-h-screen">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={pageUrl} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-primary-dark">Biblical Counselling Level {level}</h1>
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Course Overview</h2>
          <p className="text-gray-700 mb-4"><strong>Duration:</strong> {duration}</p>
          <p className="text-gray-700 mb-4"><strong>Certification:</strong> {certification}</p>
          <p className="text-gray-700 mb-6">{description}</p>
          <div className="flex justify-between items-center">
            <a href="#contact" className="btn btn-primary">Apply Now</a>
            <button onClick={handleShare} className="flex items-center text-primary hover:text-primary-dark">
              <Share2 className="w-5 h-5 mr-2" />
              Share
            </button>
          </div>
        </div>
        <h2 className="text-3xl font-semibold mb-6 text-primary-dark">Modules</h2>
        {modules.map((module, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-semibold mb-4 text-primary-dark">{module.code}: {module.title}</h3>
            <ul className="list-disc pl-6 space-y-2">
              {module.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-gray-700">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LevelPage;