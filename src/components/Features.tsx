import React from 'react';
import { BookOpen, Users, Zap, Globe } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-100 to-gray-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800">Why Choose MyFiladelfia</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <FeatureCard
            icon={<BookOpen className="w-16 h-16 text-primary" />}
            title="Theological Depth"
            description="Rigorous academic content combined with practical application"
          />
          <FeatureCard
            icon={<Users className="w-16 h-16 text-primary" />}
            title="Supportive Community"
            description="Connect with peers and mentors in a nurturing environment"
          />
          <FeatureCard
            icon={<Zap className="w-16 h-16 text-primary" />}
            title="Cutting-Edge Learning"
            description="Interactive online tools for engaging and effective study"
          />
          <FeatureCard
            icon={<Globe className="w-16 h-16 text-primary" />}
            title="Global Perspective"
            description="Diverse insights from an international student body"
          />
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="mb-6 text-primary">{icon}</div>
      <h3 className="text-2xl font-sans font-semibold mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Features;