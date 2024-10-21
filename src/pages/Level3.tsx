import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

// Module Component to handle module toggle behavior
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

const Level3: React.FC = () => {
  const level3Data = {
    level: "3",
    duration: "1 year",
    certification: "Advanced Certificate in Biblical Counselling",
    description: "The final level of our Biblical Counselling program focuses on specialized counselling areas and includes a practical component, preparing students for real-world ministry and counselling scenarios.",
    modules: [
      {
        code: "BAH131",
        title: "Christian Service",
        items: [
          "The Good Shepherd & the Needy Sheep",
          "Serving the Unborn Children",
          "Serving the New Generation",
          "Serving the Illegal Immigrants",
          "Serving the Homeless",
          "Serving the Unreached",
          "Serving the Persecuted Church",
          "Serving Theologically Errant"
        ]
      },
      {
        code: "BAM512",
        title: "Christian Leadership",
        items: [
          "Introductory matters",
          "A Leadership Fable from the Bible",
          "How Healthy Am I as a Leader?",
          "A Study of Statistics",
          "The Christian Leader's Prayer Life",
          "Boundaries",
          "Leading by Faith"
        ]
      },
      {
        code: "BAT512",
        title: "Doctrine of Grace",
        items: [
          "Introduction to Grace",
          "God of Grace",
          "Covenant of Grace (Adam to Abraham)",
          "Covenant of Grace (Moses to David)",
          "New Covenant in Jesus Christ",
          "Ordinary Means of Grace",
          "Grace in the Church and Grace to the World",
          "Faith in Future Grace"
        ]
      },
      {
        code: "BAM726",
        title: "Problem Management",
        items: [
          "Natural Problem-Solving Process",
          "Person Centered Therapy",
          "Values, Attending, Listening, Understanding & Empathy",
          "An Introduction to Egan's Model",
          "The Shadow Side of Helping & Implementing Change",
          "Stage 1-3 of Egan's Model",
          "Practical Exercises"
        ]
      },
    {
        code: "BAM321",
        title: "Pre-Marital Counselling",
        items: [
          "The Pressure that Traditional Marriage is Exposed to",
          "What the Bible Says Marriage is",
          "Marriage Vows",
          "The Role of the Husband",
          "The Role of the Wife",
          "Children",
          "Conflict Management",
          "Grow!"
        ]
      },
      {
        code: "BAM317",
        title: "Marriage Therapy",
        items: [
          "Marriage Under Fire",
          "Wedding Vows",
          "Unfaithfulness",
          "Communication",
          "Conflict Management",
          "Sex",
          "Marriage Enrichment"
        ]
      },
      {
        code: "BAM318",
        title: "A Pastoral Approach to Illness",
        items: [
          "General Considerations",
          "Words of Advice",
          "Theological Dimensions of Illness",
          "Pastoral Work and Mental Illness",
          "HIV & AIDS",
          "Reflections & Resources"
        ]
      },
      {
        code: "BAT810",
        title: "Defending the Faith (Apologetics)",
        items: [
          "Introduction to Apologetics",
          "Fundamental Concepts in Presuppositional Apologetics",
          "A Persona, Holistic & trinitarian View of Truth",
          "The Nature of Man, the Fall, Sin & Apologetics",
          "A Biblical Method of Apologetics",
          "The Problem of Faith & Circular Reasoning",
          "The Problem of Evil",
          "History, Theology, Suffering & Apologetics"
        ]
      },
      {
        code: "BAB811",
        title: "Advanced Interpretation of Scripture",
        items: [
          "Introduction to Interpretation",
          "The Hermeneutic Circle",
          "Theological Principles",
          "Revelation & Interpretation",
          "Textual Content Study",
          "Gospel & Church Study",
          "Personal & Contextual Study",
          "Ministerial Application"
        ]
      },
      {
        code: "BAM116",
        title: "Ministry Analysis",
        items: [
          "Church & Congregational Leadership",
          "Evangelism, Missions, Preaching",
          "Pastoral Work",
          "Teaching, Counselling",
          "Administration",
          "Communications",
          "Diaconal Work",
          "Music, Worship",
          "Children & Youth Ministry"
        ]
      },
      {
        code: "MAT623",
        title: "Covenant Theology",
        items: [
          "Introductory Concepts",
          "The Structure of Covenants",
          "Adam - The Covenants of Works & Grace",
          "God's Covenants with Noah & Abraham",
          "Moses, Israel, & the Law",
          "Davidic Covenant & the Covenantal Prophets",
          "The New Covenant",
          "The Sign & Seal of the Covenants"
        ]
      },
      {
        code: "PB05",
        title: "Practical Theology (Prescribed Book: Osmer)",
        items: [
          "How to correctly identify, observe and describe prominent issues",
          "Interpreting the results",
          "Exploring and describing what is normal/instead desired/what should work",
          "Putting a plan on the table to migrate from 'what is,' to 'what ought to be'"
        ]
      },
      {
        code: "PB06",
        title: "Basic Types of Pastoral Care and Counselling (Prescribed Book: Clinebell)",
        items: [
          "Challenges of pastoral work",
          "Opportunities for pastoral work",
          "Holistic pastoral caregiving",
          "Differentiating between short-, medium-, and long-term pastoral caregiving",
          "Pastoral ethics, skills in pastoral care, referral counselling, self-care"
        ]
      },
      {
        code: "PB07",
        title: "Network of the Human Soul (Prescribed Book: Louw)",
        items: [
          "The Human Soul",
          "Positions of Life",
          "Meaning in Life",
          "Intimacy, Maturity, Growth",
          "Humanity",
          "Being",
          "Bereavement"
        ]
      },
      {
        code: "PAM44",
        title: "Research Script",
        items: [
          "Responsible academic and scientific research of an approved topic.",
          "A topic that typically supports one's particular call to pastoral ministry.",
          "Apply Research Methodology",
          "Properly Document the Knowledge Gained",
          "Share the Knowledge Gained"
      ]
    }
    ]
  };

  return (
    <div className="bg-neutral-100 min-h-screen">
      <Helmet>
        <title>Level 3: Specialized Counselling and Practicum - MyFiladelfia</title>
        <meta
          name="description"
          content="Deepen your Biblical Counselling skills with MyFiladelfia's Level 3 course on advanced techniques."
        />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-primary-dark">
          Biblical Counselling Level {level3Data.level}
        </h1>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Course Overview</h2>
          <p className="text-gray-700 mb-4"><strong>Duration:</strong> {level3Data.duration}</p>
          <p className="text-gray-700 mb-4"><strong>Certification:</strong> {level3Data.certification}</p>
          <p className="text-gray-700 mb-6">{level3Data.description}</p>
          <Link to="/contact" className="btn btn-primary inline-flex items-center">
            Apply Now
          </Link>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-primary-dark">Course Modules</h2>
          {level3Data.modules.map((module, index) => (
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

export default Level3;
