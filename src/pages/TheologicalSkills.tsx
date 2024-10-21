import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Book, Users, Briefcase, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const TheologicalSkills: React.FC = () => {
  // Data for each module
  const modules = [
    {
      code: "BAT024",
      title: "Introduction to Theology",
      description: "An introductory exploration into the foundational doctrines of Christian theology, providing students with a framework for understanding essential beliefs, sources, and theological methodology.",
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
      code: "BAB001",
      title: "An Orientation to Biblical Studies",
      description: "A comprehensive overview of the Bible, covering its historical context, literary structure, and its role as God's revelation to humanity, establishing a foundation for in-depth study.",
      items: [
        "The Bible - God's Revelation to Man",
        "Trustworthiness of the Scripture",
        "The Pentateuch",
        "Judges, Kings, and Wisdom Literature",
        "The Prophets Exile",
        "The Gospels of Jesus Christ",
        "Acts, Paul, and the General Epistles",
        "The Authority and Canon of Scripture"
      ]
    },
    {
      code: "BAM311",
      title: "Introduction to Pastoral Care Part 1",
      description: "An exploration of the core principles and practices of pastoral care, focusing on the counselor's role, spiritual challenges, and approaches to supporting individuals through various life crises.",
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
      code: "BAH936",
      title: "Biblical Foundations for Missions",
      description: "An examination of the biblical call to missions, exploring God's mission through both the Old and New Testaments and the implications for modern missional work.",
      items: [
        "The Mission of God in Scripture",
        "Old Testament Foundations for Missions",
        "New Testament Mission Mandates",
        "The Church and Its Mission",
        "Missionary Journeys of Paul",
        "The Role of the Holy Spirit in Missions",
        "Cross-Cultural Engagement"
      ]
    },
    {
      code: "BAB410",
      title: "Synoptic Gospels",
      description: "An in-depth study of the Gospels of Matthew, Mark, and Luke, focusing on their similarities, differences, and the unified portrayal of Jesus' life, ministry, and teachings.",
      items: [
        "Introduction to the Synoptic Gospels",
        "The Historical Jesus",
        "The Kingdom of God in the Synoptics",
        "Parables and Miracles",
        "Comparative Analysis of Matthew, Mark, and Luke",
        "Christology in the Synoptic Gospels",
        "The Passion Narratives"
      ]
    },
    {
      code: "BAB091",
      title: "Acts and the Pauline Epistles",
      description: "A study of the early church as recorded in the book of Acts and a review of Paul's letters, emphasizing his theology, church leadership, and contributions to Christian doctrine.",
      items: [
        "The Birth of the Church in Acts",
        "Paul's Missionary Journeys",
        "Pauline Theology",
        "Themes in the Pauline Epistles",
        "The Role of the Holy Spirit",
        "Paul's Letters to the Churches",
        "Leadership and Church Growth"
      ]
    },
    {
      code: "BAB414",
      title: "The Gospel of John and 1, 2 & 3 John",
      description: "A detailed examination of the Gospel of John and the epistles of John, focusing on their unique themes of love, light, truth, and the deity of Jesus.",
      items: [
        "Introduction to the Gospel of John",
        "The Divinity of Christ",
        "Signs and Miracles in John",
        "Themes of Love and Truth",
        "1, 2, & 3 John: Letters of Encouragement",
        "The Doctrine of Fellowship",
        "Living in Light of Christ"
      ]
    },
    {
      code: "BAM142",
      title: "Introduction to Pastoral Care Part 2",
      description: "A continuation of pastoral care studies, this module delves deeper into practical issues in pastoral ministry, including prayer, pastoral challenges, and practical counseling skills.",
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
      code: "BAB081",
      title: "Hermeneutics",
      description: "An introduction to the art and science of biblical interpretation, teaching students essential principles for understanding, interpreting, and applying the Bible accurately.",
      items: [
        "Introduction to Interpretation",
        "The Hermeneutic Circle",
        "Historical Context of Scripture",
        "Theological Principles",
        "Revelation & Interpretation",
        "Methods of Exegesis",
        "Application of Biblical Text"
      ]
    },
    {
      code: "BAB639",
      title: "Revelation",
      description: "A study of the Book of Revelation, focusing on its symbols, prophetic messages, and eschatological themes, offering hope and encouragement for the future.",
      items: [
        "Introduction to Apocalyptic Literature",
        "The Structure of Revelation",
        "The Seven Churches",
        "Symbolism in Revelation",
        "Judgment and Redemption",
        "The New Heaven and New Earth",
        "Interpreting Prophetic Imagery"
      ]
    }
  ];

  // State to handle open/close for accordion items
  const [openModuleIndex, setOpenModuleIndex] = useState<number | null>(null);

  // Toggle accordion
  const handleToggle = (index: number) => {
    setOpenModuleIndex(openModuleIndex === index ? null : index);
  };

  return (
    <div className="bg-neutral-100 min-h-screen">
      <Helmet>
        <title>Theological Skills - MyFiladelfia</title>
        <meta name="description" content="Develop essential theological skills with MyFiladelfia's comprehensive courses, designed to deepen your understanding of Scripture and Christian doctrine." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-primary-dark">Theological Skills</h1>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Program Overview</h2>
          <p className="text-gray-700 mb-6">
            Our Theological Skills program is designed to provide students with a deep understanding of Christian theology and the ability to apply it in various ministry contexts. This course covers biblical interpretation, systematic theology, and practical application of theological concepts.
          </p>
          <p className="text-gray-700 mb-6">
            <strong>Duration:</strong> Flexible, self-paced learning
          </p>
          <p className="text-gray-700 mb-6">
            <strong>Format:</strong> Online modules with optional in-person workshops
          </p>
          <p className="text-gray-700 mb-6">
            <strong>Certification:</strong> Certificate in Theological Skills upon completion of all modules
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Course Modules</h2>
          {modules.map((module, index) => (
            <div key={index} className="mb-6">
              <button
                className="flex justify-between items-center w-full text-left font-semibold text-lg text-primary bg-white p-4 rounded-lg shadow-md hover:bg-gray-50"
                onClick={() => handleToggle(index)}
              >
                {module.code}: {module.title}
                <ChevronDown className={`transform transition-transform ${openModuleIndex === index ? 'rotate-180' : ''}`} />
              </button>
              {openModuleIndex === index && (
                <div className="mt-2 pl-4">
                  <p className="text-gray-700 mb-4">{module.description}</p>
                  <ul className="list-disc pl-5 mt-2">
                    {module.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-600">{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Investment</h2>
          <p className="text-gray-700 mb-4">
            <strong>Price:</strong> R500 per module
          </p>
          <p className="text-gray-700 mb-6">
            Flexible payment options available. Contact us for more information on installment plans or package deals.
          </p>
        </section>

        <div className="text-center mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a href="mailto:jack@myfiladelfia.com" className="btn btn-primary inline-flex items-center">
            <Book className="w-5 h-5 mr-2" />
            Show Interest
          </a>
          <Link to="/investment" className="btn btn-secondary inline-flex items-center">
            View Full Investment Details <Briefcase className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TheologicalSkills;