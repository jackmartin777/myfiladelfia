import React, { useState } from 'react';
import { ChevronDown, Briefcase, Mail } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ShortCourseModule = ({ module }) => {
  const [isOpen, setIsOpen] = useState(false);

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
            {module.topics.map((topic, index) => (
              <li key={index} className="text-gray-600">{topic}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const ShortCourses: React.FC = () => {
  const shortCourses = [
    {
      code: "BAB001",
      title: "Introduction to the Bible",
      topics: [
        "The Bible - God's Revelation to Man",
        "Trustworthiness of the Scripture",
        "The Pentateuch",
        "Judges, Kings, and Wisdom Literature",
        "The Prophets, Exile",
        "The Gospels of Jesus Christ",
        "Acts, Paul and the General Epistles",
        "The Authority and Canon of Scripture"
      ]
    },
    {
      code: "BAT024",
      title: "Introduction to Theology",
      topics: [
        "Definitions",
        "An Outline of Theology",
        "Sources and Methods",
        "Main Divisions of Theology",
        "Essential Christian Doctrines",
        "Major Confessions",
        "Creeds, Catechisms and Confessions",
        "Brief History of Christianity"
      ]
    },
    {
      code: "BAT324",
      title: "Biblical Ethics",
      topics: [
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
      topics: [
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
      topics: [
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
      topics: [
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
      topics: [
        "The Need for Pastoral Counselling",
        "Theological Principles",
        "Problems in Pastoral Counselling"
      ]
    },
    {
      code: "PB01",
      title: "Christian Counselling (Prescribed Book: Collins)",
      topics: [
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
      topics: [
        "Why is There Such a Thing as Pain?",
        "How People Respond to Suffering",
        "Coping with Pain & Suffering",
        "Faith & Suffering"
      ]
    },
    {
      code: "PB03",
      title: "How People Grow (Prescribed Book: Cloud and Townsend)",
      topics: [
        "Paradise Lost",
        "The Master Gardener",
        "Finding the Best Climate",
        "Growth for Life"
      ]
    },
    {
      code: "PB04",
      title: "Counselling Youth (Prescribed Book: McDowell and Hostetler)",
      topics: [
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
      topics: [
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
      topics: [
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
      topics: [
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
      topics: [
        "Theology Proper",
        "Christology",
        "Pneumatology",
        "The Trinity"
      ]
    },
    {
      code: "BAM131",
      title: "Homiletics: Preach the Word",
      topics: [
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
      topics: [
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
      code: "BAH131",
      title: "Christian Service",
      topics: [
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
      topics: [
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
      topics: [
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
      topics: [
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
      topics: [
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
      topics: [
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
      topics: [
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
      topics: [
        "Introduction to Apologetics",
        "Fundamental Concepts in Presuppositional Apologetics",
        "A Persona, Holistic & trinitarian View of Truth",
        "The Nature of Man, the Fall, Sin & Apologetics",
        "A Biblical Method of Apologetics",
        "The Problem of Faith & Circular Reasoning",
        "The Problem of Evil","History, Theology, Suffering & Apologetics"
      ]
    },
    {
      code: "BAB811",
      title: "Advanced Interpretation of Scripture",
      topics: [
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
      topics: [
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
      topics: [
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
      topics: [
        "How to correctly identify, observe and describe prominent issues",
        "Interpreting the results",
        "Exploring and describing what is normal/instead desired/what should work",
        "Putting a plan on the table to migrate from \"what is,\" to \"what ought to be\""
      ]
    },
    {
      code: "PB06",
      title: "Basic Types of Pastoral Care and Counselling (Prescribed Book: Clinebell)",
      topics: [
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
      topics: [
        "The Human Soul",
        "Positions of Life",
        "Meaning in Life",
        "Intimacy, Maturity, Growth",
        "Humanity",
        "Being",
        "Bereavement"
      ]
    }
  ];

  return (
    <div className="bg-neutral-100 min-h-screen">
      <Helmet>
        <title>Short Courses - MyFiladelfia</title>
        <meta name="description" content="Explore MyFiladelfia's range of short courses designed to enhance your biblical knowledge and ministry skills." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-primary">MyFiladelfia Short Course Curriculum</h1>
        <p className="text-gray-700 mb-8">
          Our short courses offer flexible learning opportunities for those seeking to enhance their knowledge and skills in specific areas of biblical studies, theology, and pastoral care. Each course can be taken individually or as part of our comprehensive program.
        </p>
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Course Details</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Format:</strong> Online self-paced learning with optional workshops</li>
            <li><strong>Duration:</strong> Varies by course, typically 4-8 weeks</li>
            <li><strong>Assessment:</strong> Combination of quizzes, assignments, and final project</li>
            <li><strong>Certification:</strong> Certificate of Completion for each course</li>
          </ul>
        </section>
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Investment</h2>
          <p className="text-gray-700 mb-4">
            For detailed pricing information and available discounts, please contact Pastor Jack directly. We offer flexible payment options to accommodate various financial situations.
          </p>
        </section>
        {shortCourses.map((course, index) => (
          <ShortCourseModule key={index} module={course} />
        ))}
        <div className="mt-12 text-center flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://www.cognitoforms.com/MyfiladelfiaOnlineTheologyCoursesInBiblicalCounsellingAndLifeSkillDevelopment/ShortCourseRegistrationForm"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-lg px-8 py-4 inline-block"
          >
            Register for a Short Course
          </a>
          <a href="mailto:jack@myfiladelfia.com" className="btn btn-secondary inline-flex items-center">
            <Mail className="w-5 h-5 mr-2" />
            Contact for Pricing
          </a>
          <Link to="/investment" className="btn btn-secondary inline-flex items-center">
            View Full Investment Details <Briefcase className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShortCourses;