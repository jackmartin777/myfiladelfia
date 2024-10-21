import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Module: React.FC<{ module: any }> = ({ module }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="mb-6">
      <button
        className="flex justify-between items-center w-full text-left font-semibold text-lg text-primary bg-white p-4 rounded-lg shadow-md hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {module.code}: {module.title}
        <ChevronDown className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="mt-2 pl-4">
          <ul className="list-disc pl-5 mt-2">
            {module.items.map((item: string, index: number) => (
              <li key={index} className="text-gray-600">{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Level2: React.FC = () => {
  const level2Data = {
    level: "2",
    duration: "1 year",
    certification: "Certificate in Biblical Counselling Level 2",
    description: "Building on Level 1, this course delves deeper into advanced counselling techniques, equipping students with more specialized skills for addressing complex pastoral care situations.",
    modules: [
      {
        code: "PB04",
        title: "Counselling Youth (Prescribed Book: McDowell and Hostetler)",
        items: [
          "Emotional Issues",
          "Relational Issues",
          "Sexual Issues",
          "Abuse, Addictions, Disorders",
          "Educational Issues",
          "Physical Issues",
          "Occupational Issues"
        ]
      },
      {
        code: "BAT610",
        title: "Doctrine of the Church",
        items: [
          "Biblical Descriptions of the Church",
          "The Church, Covenant and Kingdom",
          "Theological Descriptions of the Church",
          "The Church's Three-Fold Ministry",
          "The Means of Grace",
          "Authority in the Church",
          "Spiritual Gifts in Church Life",
          "The Doctrine of the Church and Church Planting"
        ]
      },
      {
        code: "BAL911",
        title: "Psychology for Christian Counselling",
        items: [
          "A Brief Introduction to Psychology",
          "The Relationship between Theology & Psychology",
          "Normality & Pathology",
          "Emotions",
          "Personality & Temperament",
          "Memory, Thinking & Intelligence",
          "Stress"
        ]
      },
      {
        code: "BAT921",
        title: "Christian Theology for Biblical Pastoral Counselling Part 1",
        items: [
          "What is Christian Doctrine?",
          "Why Study Christian Doctrine?",
          "Terms, Definitions & Differences",
          "Biblical Revelation, Inspiration & the Canon",
          "Biblical Inerrancy & Perfections",
          "Anthropology"
        ]
      },
      {
        code: "BAT922",
        title: "Christian Theology for Biblical Pastoral Counselling Part 2",
        items: [
          "Theology Proper",
          "Christology",
          "Pneumatology",
          "The Trinity"
        ]
      },
      {
        code: "BAM131",
        title: "Homiletics: Preach the Word",
        items: [
          "What is Expository Preaching",
          "Rightly Handling the Word of God",
          "Structure: State, Illustrate and Apply",
          "Sermon Delivery",
          "The Preacher's Prayer Life",
          "The Authority of Preaching",
          "Preaching in Christ",
          "Pastoral Preaching"
        ]
      },
      {
        code: "BAM130",
        title: "Gospel Preaching: A Manual for Sermon Development",
        items: [
          "Apostolic Preaching",
          "Exposition of Scripture",
          "Explanation of Scripture",
          "Redemption",
          "Applying Scripture",
          "Sermon Structuring",
          "Adoration of God"
        ]
      },
      {
        code: "RP01",
        title: "Research Project",
        items: [
          "How to conduct independent, scientific, and responsible topical theological research within the framework of an approved model of theological research",
          "Orientation to bibliographic, normative, and phenomenological research",
          "An introduction to documenting research results"
        ]
      }
    ]
  };

  return (
    <div className="bg-neutral-100 min-h-screen">
      <Helmet>
        <title>Level 2: Advanced Biblical Counselling - MyFiladelfia</title>
        <meta
          name="description"
          content="Deepen your Biblical Counselling skills with MyFiladelfia's Level 2 course on advanced techniques."
        />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-primary-dark">Biblical Counselling Level {level2Data.level}</h1>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Course Overview</h2>
          <p className="text-gray-700 mb-4"><strong>Duration:</strong> {level2Data.duration}</p>
          <p className="text-gray-700 mb-4"><strong>Certification:</strong> {level2Data.certification}</p>
          <p className="text-gray-700 mb-6">{level2Data.description}</p>
          <Link to="/contact" className="btn btn-primary inline-flex items-center">
            Apply Now
          </Link>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-primary-dark">Course Modules</h2>
          {level2Data.modules.map((module, index) => (
            <Module key={index} module={module} />
          ))}
        </section>

        <section className="mt-12 text-center">
          <a
            href="https://www.cognitoforms.com/MyFiladelfia/registrationanddebitorderform"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary inline-flex items-center"
          >
            <FileText className="w-5 h-5 mr-2" />
            Registration Form
          </a>
        </section>
      </div>
    </div>
  );
};

export default Level2;