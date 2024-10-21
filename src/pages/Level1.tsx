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

const Level1: React.FC = () => {
  const level1Data = {
    level: "1",
    duration: "1 year",
    certification: "Certificate in Biblical Counselling Level 1",
    description: "This foundational course introduces students to the core principles of biblical counselling, providing a solid grounding in Scripture-based guidance and pastoral care.",
    modules: [
      {
        code: "BAB001",
        title: "Introduction to the Bible",
        items: [
          "The Bible - God's Revelation to Man",
          "Trustworthiness of the Scripture",
          "The Pentateuch",
          "Judges Kings and Wisdom Literature",
          "The Prophets Exile",
          "The Gospels of Jesus Christ",
          "Acts Paul and the General Epistles",
          "The Authority and Canon of Scripture"
        ]
      },
      {
        code: "BAT024",
        title: "Introduction to Theology",
        items: [
          "Definitions",
          "An Outline of Theology",
          "Sources and Methods",
          "Main Divisions of Theology",
          "Essential Christian Doctrines",
          "Major Confessions",
          "Creeds Catechisms and Confessions",
          "Brief History of Christianity"
        ]
      },
      {
        code: "BAT324",
        title: "Biblical Ethics",
        items: [
          "Foundations",
          "Different Views of Christian Ethics",
          "The Implications of Jesus' Resurrection",
          "Our Relationship with God",
          "Discussions about the Ten Commandments"
        ]
      },
      {
        code: "BAM311A",
        title: "Pastoral Counselling Foundations",
        items: [
          "The Counsellor's Life",
          "The Portrait of a Counsellor",
          "Biblical Qualifications of a Counsellor",
          "Spiritual World",
          "Anxiety and Depression",
          "Grief",
          "Suicide",
          "Sexual Abuse",
          "Anger",
          "Forgiveness",
          "Addictions",
          "Perfectionism"
        ]
      },
      {
        code: "BAM311B",
        title: "Pastoral Counselling Practices",
        items: [
          "A Portrait of the Pastor/Counsellor",
          "The Call to Pastoral Ministry",
          "The Pastor/Counsellor's Godliness",
          "The Pastor/Counsellor's Priorities",
          "The Pastor/Counsellor's Prayer Life",
          "Preaching",
          "Pastoral Practice",
          "Pastoral/Counselling Sorrows & Joys"
        ]
      },
      {
        code: "BAT021",
        title: "The Doctrine of Scripture",
        items: [
          "General and Special Revelation",
          "The Inspiration of Scripture",
          "The Story of Scripture",
          "The Reliability of Biblical Manuscripts",
          "The Inerrancy of Scripture",
          "The Perfections of Scripture",
          "The Canon and the Apocrypha",
          "Questionable Theology"
        ]
      },
      {
        code: "BAM416",
        title: "Pastoral Theological Counselling",
        items: [
          "The Need for Pastoral Counselling",
          "Theological Principles",
          "Problems in Pastoral Counselling"
        ]
      },
      {
        code: "PB01",
        title: "Christian Counselling (Prescribed Book: Collins)",
        items: [
          "Prominent Issues",
          "Developmental Issues",
          "Interpersonal Issues",
          "Identity Issues",
          "Control Issues"
        ]
      },
      {
        code: "PB02",
        title: "Where is God When it Hurts? (Prescribed Book: Yancey)",
        items: [
          "Why is There Such a Thing as Pain?",
          "How People Respond to Suffering",
          "Coping with Pain & Suffering",
          "Faith & Suffering"
        ]
      }
    ]
  };

  return (
    <div className="bg-neutral-100 min-h-screen">
      <Helmet>
        <title>Level 1: Foundation in Biblical Counselling - MyFiladelfia</title>
        <meta
          name="description"
          content="Explore the foundational concepts of Biblical Counselling with MyFiladelfia's Level 1 course."
        />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-primary-dark">Biblical Counselling Level {level1Data.level}</h1>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Course Overview</h2>
          <p className="text-gray-700 mb-4"><strong>Duration:</strong> {level1Data.duration}</p>
          <p className="text-gray-700 mb-4"><strong>Certification:</strong> {level1Data.certification}</p>
          <p className="text-gray-700 mb-6">{level1Data.description}</p>
          <Link to="/contact" className="btn btn-primary inline-flex items-center">
            Apply Now
          </Link>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-primary-dark">Course Modules</h2>
          {level1Data.modules.map((module, index) => (
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

export default Level1;